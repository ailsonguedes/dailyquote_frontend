import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { QuoteData } from '../models/quote-data/quote-data.module';

@Injectable({
  providedIn: 'root'
})
export class QuoteServiceService {
  private baseURL:string = "";
  private quoteData:QuoteData | any;

  constructor(private http:HttpClient) {
    this.baseURL = environment.quoteApi;
   }

   getQuoteById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${id}`)
   }
}
