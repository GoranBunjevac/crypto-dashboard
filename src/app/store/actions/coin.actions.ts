import { Action } from '@ngrx/store';
import { CoinResponse } from 'src/app/models/coin-response';
import { Coin } from 'src/app/models/coin';

export enum CoinActionType {
  Loading = '[Coin] Loading',
  LoadSuccess = '[Coin] Load Success',
  LoadFailure = '[Coin] Load Failure'
}

export class CoinLoadAction implements Action {
  public readonly type = CoinActionType.Loading;
}

export class CoinLoadSuccessAction implements Action {
  public readonly type = CoinActionType.LoadSuccess;
  constructor(public payload: Coin[]) {}
}

export class CoinLoadFailAction implements Action {
  public readonly type = CoinActionType.LoadFailure;
  constructor(public error: any) {}
}

export type CoinAction = CoinLoadAction | CoinLoadSuccessAction | CoinLoadFailAction;
