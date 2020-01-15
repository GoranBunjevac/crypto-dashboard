import { FiatCurrency } from './fiat-currency';
import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("Quote")
export class Quote {
  @JsonProperty("USD")
  private _fiatCurrency: FiatCurrency = undefined;
  get fiatCurrency() {return this._fiatCurrency}
  set fiatCurrency(value: FiatCurrency) {this._fiatCurrency = value}
}
