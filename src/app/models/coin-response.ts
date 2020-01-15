import { Status } from './status';
import { Coin } from './coin';
import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject()
export class CoinResponse {
    @JsonProperty("status")
    private _status: Status;
    get status() {return this._status}
    set status(value: Status) {this._status = value;}

    @JsonProperty("data")
    private _data: Coin[];
    get data() {return this._data}
    set data(value: Coin[]) {this._data = value}
}