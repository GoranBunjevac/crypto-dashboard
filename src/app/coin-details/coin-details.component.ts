import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from '../store/global.state';
import { Observable } from 'rxjs';
import { Coin } from '../models/coin';
import { getSelectedCoin } from '../store/coin-store/coin.selectors';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.scss']
})
export class CoinDetailsComponent implements OnInit {
  coin$: Observable<Coin>;

  constructor(private store: Store<GlobalState>) { }

  ngOnInit() {
    this.coin$ = this.store.select(getSelectedCoin);
  }

}
