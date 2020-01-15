import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("FiatCurrency")
export class FiatCurrency {
  @JsonProperty("price")
  private _price: number = undefined;
  get price() {return this._price}
  set price(value: number) {this._price = value}

  @JsonProperty("volume_24h")
  private _volume24H: number = undefined;
  get volume24H() {return this._volume24H}
  set volume24H(value: number) {this._volume24H = value}

  @JsonProperty("percent_change_1h")
  private _percentChange1H: number = undefined;
  get percentChange1H() {return this._percentChange1H}
  set percentChange1H(value: number) {this._percentChange1H = value}

  @JsonProperty("percent_change_24h")
  private _percentChange24H: number = undefined;
  get percentChange24H() {return this._percentChange24H}
  set percentChange24H(value: number) {this._percentChange24H = value}

  @JsonProperty("percent_change_7d")
  private _percentChange7D: number = undefined;
  get percentChange7D() {return this._percentChange7D}
  set percentChange7D(value: number) {this._percentChange7D = value}

  @JsonProperty("market_cap")
  private _marketCap: number = undefined;
  get marketCap() {return this._marketCap}
  set marketCap(value: number) {this._marketCap = value}

  @JsonProperty("last_updated")
  private _lastUpdated: string = undefined;
  get lastUpdated() {return this._lastUpdated}
  set lastUpdated(value: string) {this._lastUpdated = value}
}
