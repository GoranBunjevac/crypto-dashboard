import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CoinState, coinAdapter } from './coin.state';
import * as fromRouterState from '../router-store/router.selectors';
import { Coin } from 'src/app/models/coin';

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

export const selectFiatCurrency = createSelector(
  selectCoinState,
  (state: CoinState): string => state.fiatCurrency
);

export const selectSearchText = createSelector(
  selectCoinState,
  (state: CoinState): string => state.searchText
);

export const getSelectedCoin  = createSelector(
  selectCoinState,
  fromRouterState.getRouterStoreState,
  (coins, routerState): Coin => {
    if (routerState && routerState.state.params.id && coins.entities[routerState.state.params.id]) {
      return coins.entities[routerState.state.params.id];
    }
  }
);

export const getFilteredCoins = createSelector(
  selectCoinState,
  selectSearchText,
  (coins, filter): Coin => {
    if(coins.entities) {
      var values = Object.keys(coins.entities).map(key => {
        return coins.entities[key];
    });
      return values.find(coin => coin.name === filter);
    }
  }
);
