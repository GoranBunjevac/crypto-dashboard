import { ActionReducerMap } from '@ngrx/store';
import { GlobalState } from './states/global.state';
import { coinReducer } from './reducers/coin.reducers';

export const reducers: ActionReducerMap<GlobalState> = {
  coin: coinReducer
};
