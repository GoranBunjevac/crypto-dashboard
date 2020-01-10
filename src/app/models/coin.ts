import { Platform } from './platform';
import { Quote } from './quote';

export class Coin {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  numMarketPairs: string;
  dateAdded: string;
  tags: string[];
  maxSupply: string;
  circulatingSupply: string;
  totalSupply: string;
  cmcRank: string;
  platform: Platform;
  quote: Quote;
  lastUpdated: string;
}
