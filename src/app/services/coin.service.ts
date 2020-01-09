import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';


const API_URL = 'https://localhost:44319/coins';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

    constructor(private http: HttpClient) { }

    getCoinData(): Observable<any> {
        return this.http
        .get(API_URL)
        .pipe(map(data => data));
    }
  }
