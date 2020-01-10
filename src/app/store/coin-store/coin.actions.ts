import { Action } from '@ngrx/store';
import { Coin } from 'src/app/models/coin';

export enum CoinActionType {
  LOAD_REQUEST = '[Coin] Loading',
  LOAD_SUCCESS = '[Coin] Load Success',
  LOAD_FAILURE = '[Coin] Load Failure',
  CHANGE_CURRENCY_REQUEST = '[Coin] Change currency request',
  CHANGE_CURRENCY_SUCCESS = '[Coin] Change currency success'
}

export class CoinLoadAction implements Action {
  public readonly type = CoinActionType.LOAD_REQUEST;
  constructor(public fiatCurrency: string) {}
}

export class CoinLoadSuccessAction implements Action {
  public readonly type = CoinActionType.LOAD_SUCCESS;
  constructor(public payload: Coin[], public fiatCurrency: string) {}
}

export class CoinLoadFailAction implements Action {
  public readonly type = CoinActionType.LOAD_FAILURE;
  constructor(public error: any) {}
}

export class ChangeCurrencyRequestAction implements Action {
  public readonly type = CoinActionType.CHANGE_CURRENCY_REQUEST;
  constructor(public payload: string) {}
}

export class ChangeCurrencySuccessAction implements Action {
  public readonly type = CoinActionType.CHANGE_CURRENCY_SUCCESS;
}

export type CoinAction = CoinLoadAction | CoinLoadSuccessAction | CoinLoadFailAction | ChangeCurrencyRequestAction | ChangeCurrencySuccessAction;
