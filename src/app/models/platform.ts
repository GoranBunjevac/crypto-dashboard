import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("Platform")
export class Platform {
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

  @JsonProperty("token_address")
  private _tokenAddress: string = undefined;
  get tokenAddress() {return this._tokenAddress}
  set tokenAddress(value: string) {this._tokenAddress = value}
}
