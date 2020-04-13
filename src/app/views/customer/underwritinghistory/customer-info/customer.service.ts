import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomer } from './Customer';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _url: string = '/assets/Data/Customer.json';
  private url: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCustomer(ssn): Observable<ICustomer[]> {
    console.log(this.url + ssn);
    return this.http.get<ICustomer[]>(this.url + ssn);
  }
}
