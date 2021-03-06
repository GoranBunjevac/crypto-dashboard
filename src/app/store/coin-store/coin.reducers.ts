import { initialCoinState, CoinState, coinAdapter } from "./coin.state";
import { CoinAction, CoinActionType } from "./coin.actions";

export function coinReducer(
  state = initialCoinState,
  action: CoinAction
): CoinState {
  switch (action.type) {
    case CoinActionType.LOAD_REQUEST: {
      return { ...state, loading: true };
    }
    case CoinActionType.LOAD_SUCCESS: {
      return coinAdapter.addAll(action.payload, {
        ...state,
        error: false,
        loading: false,
        total: 100,
        fiatCurrency: action.fiatCurrency
      });
    }
    case CoinActionType.LOAD_FAILURE: {
      return coinAdapter.removeAll({
        ...state,
        error: true,
        loading: false,
        total: 0
      });
    }
    case CoinActionType.CHANGE_CURRENCY_REQUEST: {
      return { ...state, fiatCurrency: action.payload };
    }
    default:
      return state;
  }
}
