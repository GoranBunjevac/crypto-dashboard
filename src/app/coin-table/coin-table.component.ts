import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalState } from '../store/global.state';
import { Store, select } from '@ngrx/store';
import { selectAllCoin, selectCoinTotal, selectCoinError, selectCoinLoading, selectFiatCurrency } from '../store/coin-store/coin.selectors';
import { CoinLoadAction, SearchRequestAction } from '../store/coin-store/coin.actions';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, merge, Subject, Subscription } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Coin } from '../models/coin';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-coin-table',
  templateUrl: './coin-table.component.html',
  styleUrls: ['./coin-table.component.scss']
})

export class CoinTableComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  public displayedColumns: string[] = ['name', 'rank', 'symbol', 'price', '24hourChange'];
  public dataSource: MatTableDataSource<Coin>;
  public coinTotal: number;
  public fiatCurrency: string;
  public noData: Coin[] = [];
  public loading: boolean;
  public error$: Observable<boolean>;
  public filterSubject = new Subject<string>();
  public defaultSort: Sort = { active: 'name', direction: 'asc' };

  private filter: string = "";
  private subscription: Subscription = new Subscription();

  searchForm = new FormGroup({
    searchText: new FormControl("")
  });

  constructor(public store$: Store<GlobalState>,
              private router: Router,
              public spinnerService: NgxSpinnerService) { }

  public ngOnInit(): void {
    this.store$.pipe(select(selectAllCoin)).subscribe(coins => this.initializeData(coins));
    this.store$.pipe(select(selectCoinTotal)).subscribe(total => this.coinTotal = total);
    this.store$.pipe(select(selectFiatCurrency)).subscribe(currency => this.fiatCurrency = currency);
    this.subscription.add(this.store$.pipe(select(selectCoinLoading)).subscribe(loading => {
      if (loading) {
        this.spinnerService.show();
        this.dataSource = new MatTableDataSource(this.noData);
      }
      this.loading = loading;
    }));
    this.error$ = this.store$.pipe(select(selectCoinError));
  }

  public ngAfterViewInit(): void {
    this.loadCoins();
    let filter$ = this.filterSubject.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap((value: string) => {
        this.paginator.pageIndex = 0;
        this.filter = value;
      })
    );

    let sort$ = this.sort.sortChange.pipe(tap(() => this.paginator.pageIndex = 0));

    this.subscription.add(merge(sort$, this.paginator.page).pipe(
      tap(() => {
        this.loadCoins();
      })
    ).subscribe());
  }

  private loadCoins(): void {
    this.store$.dispatch(new CoinLoadAction(this.fiatCurrency));
    this.spinnerService.hide();
  }

  private initializeData(coins: Coin[]): void {
    this.dataSource = new MatTableDataSource(coins.length ? coins : this.noData);
    if (coins.length) {
      this.dataSource.paginator = this.paginator;
    }
  }

  public refresh(): void {
    this.store$.dispatch(new CoinLoadAction(this.fiatCurrency));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onChange(e): void {
    this.store$.dispatch(new SearchRequestAction(this.searchForm.value));
  }

  public retry(): void {
    this.loadCoins();
  }
}
