import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpHandler
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CoinService {
  constructor(private http: HttpClient) {}

  getCoinData(currency: string): Observable<any> {
    const headers = new HttpHeaders({
      Accepts: "application/json",
      "X-CMC_PRO_API_KEY": "2037ccf0-b158-48d5-80d8-3f0ca5a3c8c1"
    });
    const params = new HttpParams()
      .set("start", "1")
      .set("limit", "100")
      .set("convert", currency);

    return this.http.get("v1/cryptocurrency/listings/latest", {
      params: params,
      headers: headers
    });
  }
}
