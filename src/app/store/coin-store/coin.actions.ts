import { Action } from '@ngrx/store';
import { CoinResponse } from 'src/app/models/coin-response';
import { Coin } from 'src/app/models/coin';

export enum CoinActionType {
  LOAD_REQUEST = '[Coin] Loading',
  LOAD_SUCCESS = '[Coin] Load Success',
  LOAD_FAILURE = '[Coin] Load Failure'
}

export class CoinLoadAction implements Action {
  public readonly type = CoinActionType.LOAD_REQUEST;
}

export class CoinLoadSuccessAction implements Action {
  public readonly type = CoinActionType.LOAD_SUCCESS;
  constructor(public payload: Coin[]) {}
}

export class CoinLoadFailAction implements Action {
  public readonly type = CoinActionType.LOAD_FAILURE;
  constructor(public error: any) {}
}

export type CoinAction = CoinLoadAction | CoinLoadSuccessAction | CoinLoadFailAction;
