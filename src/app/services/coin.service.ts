import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CoinService {
  constructor(private http: HttpClient) {}

  getCoinData(currency: string): Observable<any> {
    const url = "https://localhost:44319/coins/" + currency;
    return this.http.get(url).pipe(map(data => data));
  }
}
