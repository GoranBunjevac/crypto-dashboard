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
import {JsonConvert, OperationMode, ValueCheckingMode} from "json2typescript"
import { CoinResponse } from 'src/app/models/coin-response';

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
            let jsonConvert: JsonConvert = new JsonConvert();
            jsonConvert.operationMode = OperationMode.LOGGING; // print some debug data
            jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
            jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL; // never allow null
            let result: CoinResponse;
            result = jsonConvert.deserializeObject(response, CoinResponse);
            new CoinLoadSuccessAction(result.data, action.fiatCurrency);
          }
        ),
        catchError(error => of(new CoinLoadFailAction(error)))
      )
    )
  );
}
