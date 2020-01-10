import { Component, OnInit, AfterViewInit, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GlobalState } from '../store/global.state';
import { Observable, Subscription } from 'rxjs';
import { Coin } from '../models/coin';
import { getSelectedCoin, selectCoinState, selectFiatCurrency } from '../store/coin-store/coin.selectors';
import { CoinLoadAction } from '../store/coin-store/coin.actions';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.scss']
})
export class CoinDetailsComponent implements OnInit, AfterViewInit, AfterContentChecked {

  coin$: Observable<Coin>;
  fiatCurrency: string;
  browserRefresh: boolean;
  subscription: Subscription;

  constructor(private store$: Store<GlobalState>,
              private router: Router,
              private changeDetector: ChangeDetectorRef) {
                this.router.events
                .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
                .subscribe(event => {
                  if (
                    event.id === 1 &&
                    event.url === event.urlAfterRedirects
                  ) {
                    this.router.navigate(['/coins']);
                  }
                });
              }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.coin$ = this.store$.select(getSelectedCoin);
    this.store$.pipe(select(selectFiatCurrency)).subscribe((currency: string) => this.fiatCurrency = currency);
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  public refresh(): void {
    this.store$.dispatch(new CoinLoadAction(this.fiatCurrency));
  }
}
