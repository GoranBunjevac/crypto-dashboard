import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CoinState, coinAdapter } from '../states/coin.state';

export const {
  selectIds: _selectCoinDataIds,
  selectEntities: _selectCoinEntities,
  selectAll: _selectAllCoin,
  selectTotal: _selectCoinTotal
} = coinAdapter.getSelectors();

export const selectCoinState = createFeatureSelector<CoinState>('coin');

export const selectCoinIds = createSelector(
  selectCoinState,
  _selectCoinDataIds
);

export const selectCoinEntities = createSelector(
  selectCoinState,
  _selectCoinEntities
);

export const selectAllCoin = createSelector(
  selectCoinState,
  _selectAllCoin
);

export const selectCoinError = createSelector(
  selectCoinState,
  (state: CoinState): boolean => state.error
);

export const selectCoinLoading = createSelector(
  selectCoinState,
  (state: CoinState): boolean => state.loading
);


export const selectCoinTotal = createSelector(
  selectCoinState,
  (state: CoinState): number => state.total
);
