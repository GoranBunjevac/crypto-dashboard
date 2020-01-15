import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("Status")
export class Status {
    @JsonProperty("timestamp")
    private _timestamp: string = undefined;
    get timestamp() {return this._timestamp}
    set timestamp(value: string) {this._timestamp = value;}

    @JsonProperty("error_code")
    private _errorCode: number = undefined;
    get errorCode() {return this._errorCode}
    set errorCode(value: number) {this._errorCode = value;}

    @JsonProperty("error_message")
    private _errorMessage: string = undefined;
    get errorMessage() {return this._errorMessage}
    set errorMessage(value: string) {this._errorMessage = value;}

    @JsonProperty("elapsed")
    private _elapsed: number = undefined;
    get elapsed() {return this._elapsed}
    set elapsed(value: number) {this._elapsed = value;}

    @JsonProperty("credit_count")
    private _creditCount: number = undefined;
    get creditCount() {return this._creditCount}
    set creditCount(value: number) {this._creditCount = value;}

    @JsonProperty("notice")
    private _notice: string = undefined;
    get notice() {return this._notice}
    set notice(value: string) {this._notice = value;}
}