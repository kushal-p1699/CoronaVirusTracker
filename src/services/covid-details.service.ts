import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidDetailsService {
  
  constructor( private httpclient: HttpClient) { }

  getCovidDetails() {
    // return this.httpclient.get<any>('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats');
    return this.httpclient.get<any>('https://coronavirus-19-api.herokuapp.com/countries');
  }
}
