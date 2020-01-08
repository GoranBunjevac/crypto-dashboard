import { initialCoinState, CoinState, coinAdapter } from '../states/coin.state';
import { CoinAction, CoinActionType } from '../actions/coin.actions';

export function coinReducer(state = initialCoinState, action: CoinAction): CoinState {
  switch (action.type) {
    case CoinActionType.Loading: {
      return { ...state, loading: true };
    }
    case CoinActionType.LoadSuccess: {
      return coinAdapter.addAll(action.payload, {
        ...state,
        error: false,
        loading: false,
        total: 100
      });
    }
    case CoinActionType.LoadFailure: {
      return coinAdapter.removeAll({
        ...state,
        error: true,
        loading: false,
        total: 0
      });
    }
    default:
      return state;
  }
}
