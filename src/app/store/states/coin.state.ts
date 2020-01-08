import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Coin } from 'src/app/models/coin';

export interface CoinState extends EntityState<Coin> {
  error: boolean;
  loading: boolean;
  total: number;
}

export const coinAdapter: EntityAdapter<Coin> = createEntityAdapter<Coin>({
  selectId: (coin: Coin) => coin.id
});

export const initialCoinState: CoinState = coinAdapter.getInitialState({
  error: false,
  loading: true,
  total: 0
});