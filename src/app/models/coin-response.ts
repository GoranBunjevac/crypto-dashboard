import { Coin } from './coin';

export interface CoinResponse {
  total: number;
  coins: Coin[];
}
