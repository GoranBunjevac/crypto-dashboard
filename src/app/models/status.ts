import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("status")
export class Status {
    @JsonProperty("timestamp")
    private _timestamp: string;
    get timestamp() {return this._timestamp}
    set timestamp(value: string) {this._timestamp = value;}

    @JsonProperty("error_code")
    private _errorCode: number;
    get errorCode() {return this._errorCode}
    set errorCode(value: number) {this._errorCode = value;}

    @JsonProperty("error_message")
    private _errorMessage: string;
    get errorMessage() {return this._errorMessage}
    set errorMessage(value: string) {this._errorMessage = value;}

    @JsonProperty("elapsed")
    private _elapsed: number;
    get elapsed() {return this._elapsed}
    set elapsed(value: number) {this._elapsed = value;}

    @JsonProperty("credit_count")
    private _creditCount: number;
    get creditCount() {return this._creditCount}
    set creditCount(value: number) {this._creditCount = value;}

    @JsonProperty("notice")
    private _notice: string;
    get notice() {return this._notice}
    set notice(value: string) {this._notice = value;}
}