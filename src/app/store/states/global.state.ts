import { CoinState, initialCoinState } from './coin.state';

export interface GlobalState {
  coin: CoinState;
}

export const initialGlobalState: GlobalState = {
  coin: initialCoinState
};
