import { FiatCurrency } from './fiat-currency';
import { propertyMap } from '../shared/decorators/property-map';

export class Quote {
  // @propertyMap('USD')
  // @propertyMap('EUR')
  public fiatCurrency: FiatCurrency;
}
