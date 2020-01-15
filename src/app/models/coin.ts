import { Platform } from './platform';
import { Quote } from './quote';
import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("Coin")
export class Coin {
  @JsonProperty("id")
  private _id: number = undefined;
  get id() {return this._id}
  set id(value: number) {this._id = value}

  @JsonProperty("name")
  private _name: string = undefined;
  get name() {return this._name}
  set name(value: string) {this._name = value}

  @JsonProperty("symbol")
  private _symbol: string = undefined;
  get symbol() {return this._symbol}
  set symbol(value: string) {this._symbol = value}

  @JsonProperty("slug")
  private _slug: string = undefined;
  get slug() {return this._slug}
  set slug(value: string) {this._slug = value}

  @JsonProperty("num_market_pairs")
  private _numMarketPairs: string = undefined;
  get numMarketPairs() {return this._numMarketPairs}
  set numMarketPairs(value: string) {this._numMarketPairs = value}

  @JsonProperty("date_added")
  private _dateAdded: string = undefined;
  get dateAdded() {return this._dateAdded}
  set dateAdded(value: string) {this._dateAdded = value}

  @JsonProperty("tags")
  private _tags: string[] = undefined;
  get tags() {return this._tags}
  set tags(value: string[]) {this._tags = value}

  @JsonProperty("max_supply")
  private _maxSupply: string = undefined;
  get maxSupply() {return this._maxSupply}
  set maxSupply(value: string) {this._maxSupply = value}

  @JsonProperty("circulating_supply")
  private _circulatingSupply: string = undefined;
  get circulatingSupply() {return this._circulatingSupply}
  set circulatingSupply(value: string) {this._circulatingSupply = value}

  @JsonProperty("total_supply")
  private _totalSupply: string = undefined;
  get totalSupply() {return this._totalSupply}
  set totalSupply(value: string) {this._totalSupply = value}

  @JsonProperty("cmc_rank")
  private _cmcRank: string = undefined;
  get cmcRank() {return this._cmcRank}
  set cmcRank(value: string) {this._cmcRank = value}

  @JsonProperty("platform")
  private _platform: Platform = undefined;
  get platform() {return this._platform}
  set platform(value: Platform) {this._platform = value}

  @JsonProperty("quote")
  private _quote: Quote = undefined;
  get quote() {return this._quote}
  set quote(value: Quote) {this._quote = value}

  @JsonProperty("last_updated")
  private _lastUpdated: string = undefined;
  get lastUpdated() {return this._lastUpdated}
  set lastUpdated(value: string) {this._lastUpdated = value}
}
