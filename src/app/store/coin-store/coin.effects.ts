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
import { Coin } from "src/app/models/coin";
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
          (response: Coin[]) =>
            new CoinLoadSuccessAction(response, action.fiatCurrency)
        ),
        catchError(error => of(new CoinLoadFailAction(error)))
      )
    )
  );
}
