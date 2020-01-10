import { Action } from '@ngrx/store';
import { Coin } from 'src/app/models/coin';

export enum CoinActionType {
  LOAD_REQUEST = '[Coin] Loading',
  LOAD_SUCCESS = '[Coin] Load Success',
  LOAD_FAILURE = '[Coin] Load Failure',
  CHANGE_CURRENCY_REQUEST = '[Coin] Change currency request',
  SEARCH_REQUEST = '[Coin] Search Request',
  SEARCH_SUCCESS = '[Coin] Search Success',
  SEARCH_FAILURE = '[Coin] Search Failure',
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

export class SearchRequestAction implements Action {
  readonly type = CoinActionType.SEARCH_REQUEST;
  constructor(public payload: string) { }
}

export class SearchSuccessAction implements Action {
  readonly type = CoinActionType.SEARCH_SUCCESS;
  constructor(public payload: string[]) { }
}

export class SearchFailureAction implements Action {
  readonly type = CoinActionType.SEARCH_FAILURE;
  constructor(public payload: { error: string }) { }
}


export type CoinAction =
CoinLoadAction |
CoinLoadSuccessAction |
CoinLoadFailAction |
ChangeCurrencyRequestAction |
SearchRequestAction |
SearchSuccessAction |
SearchFailureAction;
