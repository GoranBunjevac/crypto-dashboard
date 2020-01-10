import { Component, OnInit } from "@angular/core";
import { MatCheckboxChange } from "@angular/material/checkbox";
import { Store, select } from "@ngrx/store";
import {
  ChangeCurrencyRequestAction,
  CoinLoadAction
} from "../store/coin-store/coin.actions";
import { selectFiatCurrency } from "../store/coin-store/coin.selectors";
import { CoinState } from "../store/coin-store/coin.state";
import { GlobalState } from "../store/global.state";
import { Router } from "@angular/router";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  constructor(public store$: Store<GlobalState>, private router: Router) {}

  fiatCurrencies = ["USD", "EUR", "CNY"];
  currencyCheckedIndex: number;

  ngOnInit(): void {
    this.store$
      .pipe(select(selectFiatCurrency))
      .subscribe(
        (currency: string) =>
          (this.currencyCheckedIndex = this.fiatCurrencies.indexOf(currency))
      );
  }

  currencyCheckboxChange(event: MatCheckboxChange, index: number) {
    // This allows only one checkbox to be checked among each checkbox
    this.currencyCheckedIndex = event.checked ? index : -1;
    this.store$.dispatch(
      new ChangeCurrencyRequestAction(this.fiatCurrencies[index])
    );
    this.store$.dispatch(new CoinLoadAction(this.fiatCurrencies[index]));
    this.router.navigate(["/coins"]);
  }
}
