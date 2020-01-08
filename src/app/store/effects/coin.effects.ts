
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { CoinActionType, CoinLoadAction, CoinLoadSuccessAction, CoinLoadFailAction } from '../actions/coin.actions';
import { CoinService } from '../../services/coin.service';
import { CoinResponse } from 'src/app/models/coin-response';

@Injectable()
export class CoinEffects {
  constructor(private service: CoinService, private actions$: Actions) { }

  @Effect()
  public loadCoins$ = this.actions$
    .pipe(ofType<CoinLoadAction>(CoinActionType.Loading),
      switchMap(action =>
        this.service
        .getCoinData()
        .pipe(
          map(response => new CoinLoadSuccessAction(response)),
          catchError((error) => of(new CoinLoadFailAction(error)))
        )
      )
    );

    // TODO: add effect for refresh?

  // @Effect()
  // public loadFilteredCoins$ = this.actions$
  //   .pipe(ofType<CoinFilteredLoadAction>(CoinActionType.Loading),
  //     map(action => action.payload),
  //     switchMap((params: CoinParams) =>
  //       this.service.getCoins(params).pipe(
  //         map((response: CoinResponse) => new CoinLoadSuccessAction(response)),
  //         catchError((error) => of(new CoinLoadFailAction(error)))
  //       )
  //     )
  //   );
}
