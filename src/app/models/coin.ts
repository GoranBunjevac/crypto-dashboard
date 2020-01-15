import { Platform } from './platform';
import { Quote } from './quote';

export class Coin {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  num_market_pairs: string;
  date_added: string;
  tags: string[];
  max_supply: string;
  circulating_supply: string;
  total_supply: string;
  cmc_rank: string;
  platform: Platform;
  quote: Quote;
  last_updated: string;
}
