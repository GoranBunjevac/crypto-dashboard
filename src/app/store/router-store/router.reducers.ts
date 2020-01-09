import { State } from './router-state.serializer'
import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
};
