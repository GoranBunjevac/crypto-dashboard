import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalState } from '../store/global.state';
import { Store, select } from '@ngrx/store';
import { selectAllCoin, selectCoinTotal, selectCoinError, selectCoinLoading } from '../store/coin-store/coin.selectors';
import { CoinLoadAction } from '../store/coin-store/coin.actions';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, merge, Subject, Subscription } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Coin } from '../models/coin';
import { Router } from '@angular/router';

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
  public noData: Coin[] = [];
  public loading: boolean;
  public error$: Observable<boolean>;
  public filterSubject = new Subject<string>();
  public defaultSort: Sort = { active: 'name', direction: 'asc' };

  private filter: string = "";
  private subscription: Subscription = new Subscription();

  constructor(public store: Store<GlobalState>,
              private router: Router) { }

  public ngOnInit(): void {
    this.store.pipe(select(selectAllCoin)).subscribe(coins => this.initializeData(coins));
    this.store.pipe(select(selectCoinTotal)).subscribe(total => this.coinTotal = total);
    this.subscription.add(this.store.pipe(select(selectCoinLoading)).subscribe(loading => {
      if (loading) {
        this.dataSource = new MatTableDataSource(this.noData);
      }
      this.loading = loading;
    }));
    this.error$ = this.store.pipe(select(selectCoinError));
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
      tap(() => this.loadCoins())
    ).subscribe());
  }

  private loadCoins(): void {
    this.store.dispatch(new CoinLoadAction());
  }

  private initializeData(coins: Coin[]): void {
    this.dataSource = new MatTableDataSource(coins.length ? coins : this.noData);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public retry(): void {
    this.loadCoins();
  }
}
