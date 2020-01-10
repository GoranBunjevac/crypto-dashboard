import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';


const API_URL = 'https://localhost:44319/coins';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

    constructor(private http: HttpClient) { }

    getCoinData(currency: string): Observable<any> {
        let url = 'https://localhost:44319/coins/' + currency;
        return this.http
        .get(url)
        .pipe(map(data => data));
    }
  }
