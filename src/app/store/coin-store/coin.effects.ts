import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import {
  CoinActionType,
  CoinLoadAction,
  CoinLoadSuccessAction,
  CoinLoadFailAction
} from "./coin.actions";
import { CoinService } from "../../services/coin.service";
import { Store } from "@ngrx/store";
import { CoinState } from "./coin.state";

@Injectable()
export class CoinEffects {
  constructor(
    private service: CoinService,
    private actions$: Actions,
    private store$: Store<CoinState>
  ) {}

  @Effect()
  public loadCoins$ = this.actions$.pipe(
    ofType<CoinLoadAction>(CoinActionType.LOAD_REQUEST),
    switchMap(action =>
      this.service.getCoinData(action.fiatCurrency).pipe(
        map(
          (response: any) => {
            response["data"].forEach(element => {
              if(element["quote"].hasOwnProperty("USD")) {
                element["quote"].fiat_currency = element["quote"].USD;
                delete element["quote"].USD;
              }
              if(element["quote"].hasOwnProperty("EUR")) {
                element["quote"].fiat_currency = element["quote"].EUR;
                delete element["quote"].EUR;
              }
              if(element["quote"].hasOwnProperty("CNY")) {
                element["quote"].fiat_currency = element["quote"].CNY;
                delete element["quote"].CNY;
              }
            });

            return new CoinLoadSuccessAction(response["data"], action.fiatCurrency);
          }
        ),
        catchError(error => of(new CoinLoadFailAction(error)))
      )
    )
  );
}
