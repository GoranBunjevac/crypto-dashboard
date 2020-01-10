import { RouterReducerState } from "@ngrx/router-store";
import { RouterStateUrl } from "./router-state.serializer";
import {
  createFeatureSelector,
  MemoizedSelector,
  createSelector
} from "@ngrx/store";

// tslint:disable-next-line: max-line-length
export const getRouterStoreState: MemoizedSelector<
  object,
  RouterReducerState<RouterStateUrl>
> = createFeatureSelector<RouterReducerState<RouterStateUrl>>("router");
export const getRouterState: MemoizedSelector<
  object,
  RouterStateUrl
> = createSelector(getRouterStoreState, state => state.state);
