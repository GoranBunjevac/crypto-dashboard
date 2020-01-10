import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Coin } from 'src/app/models/coin';

export interface CoinState extends EntityState<Coin> {
  error: boolean;
  loading: boolean;
  // TODO: remove total?
  total: number;
  fiatCurrency: string;
  searchText: string;
}

export const coinAdapter: EntityAdapter<Coin> = createEntityAdapter<Coin>({
  selectId: (coin: Coin) => coin.id,
  sortComparer: (a: Coin, b: Coin): number =>
        a.name.toString().localeCompare(b.name.toString())
});

export const initialCoinState: CoinState = coinAdapter.getInitialState({
  error: false,
  loading: true,
  total: 0,
  fiatCurrency: 'USD',
  searchText: ''
});
