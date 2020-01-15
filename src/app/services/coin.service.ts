import { HttpClient, HttpHeaders, HttpParams, HttpHandler } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { Coin } from '../models/coin';
import { ModelMapper } from '../shared/model-mapper';
import { map, switchMap } from 'rxjs/operators';
import {JsonConvert, OperationMode, ValueCheckingMode} from "json2typescript"


@Injectable({
  providedIn: "root"
})

export class CoinService {
  constructor(private http: HttpClient) { }

  getCoinData(currency: string): Observable<any> {
    const headers = new HttpHeaders({ "Accepts": "application/json", "X-CMC_PRO_API_KEY": "2037ccf0-b158-48d5-80d8-3f0ca5a3c8c1" });
    let response: Response;
    const params = new HttpParams()
      .set('start', '1')
      .set('limit', '100')
      .set('convert', currency);
    return this.http.get("v1/cryptocurrency/listings/latest", { params: params, headers: headers })

      // .pipe(
      //   switchMap((item: any) => {
      //     return new ModelMapper(Coin).map(item);
      //   }
      //   ))
      ;;
  };
}
