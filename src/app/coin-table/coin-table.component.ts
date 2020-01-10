import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  AfterViewInit
} from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { GlobalState } from "../store/global.state";
import { Store, select } from "@ngrx/store";
import {
  selectAllCoin,
  selectCoinTotal,
  selectCoinError,
  selectCoinLoading,
  selectFiatCurrency
} from "../store/coin-store/coin.selectors";
import { CoinLoadAction } from "../store/coin-store/coin.actions";
import { MatPaginator } from "@angular/material/paginator";
import { Observable, merge, Subscription } from "rxjs";
import { tap } from "rxjs/operators";
import { Coin } from "../models/coin";


@Component({
  selector: "app-coin-table",
  templateUrl: "./coin-table.component.html",
  styleUrls: ["./coin-table.component.scss"]
})
export class CoinTableComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  public displayedColumns: string[] = [
    "name",
    "rank",
    "symbol",
    "price",
    "24hourChange"
  ];
  public dataSource: MatTableDataSource<Coin>;
  public coinTotal: number;
  public fiatCurrency: string;
  public error$: Observable<boolean>;
  public noData: Coin[] = [];
  public loading: boolean;

  private subscription: Subscription = new Subscription();

  constructor(
    public store$: Store<GlobalState>
  ) {}

  public ngOnInit(): void {
    this.store$
      .pipe(select(selectAllCoin))
      .subscribe(coins => this.initializeData(coins));
    this.store$
      .pipe(select(selectCoinTotal))
      .subscribe(total => (this.coinTotal = total));
    this.store$
      .pipe(select(selectFiatCurrency))
      .subscribe(currency => (this.fiatCurrency = currency));
    this.error$ = this.store$.pipe(select(selectCoinError));
    this.subscription.add(
      this.store$.pipe(select(selectCoinLoading)).subscribe(loading => {
        if (loading) {
          this.dataSource = new MatTableDataSource(this.noData);
        }
        this.loading = loading;
      })
    );
  }

  public ngAfterViewInit(): void {
    this.loadCoins();
    this.subscription.add(
      merge(this.paginator.page)
        .pipe(
          tap(() => {
            this.loadCoins();
          })
        )
        .subscribe()
    );
  }

  private loadCoins(): void {
    this.store$.dispatch(new CoinLoadAction(this.fiatCurrency));
  }

  private initializeData(coins: Coin[]): void {
    this.dataSource = new MatTableDataSource(
      coins.length ? coins : this.noData
    );
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

  public retry() {
    this.loadCoins();
  }
}
