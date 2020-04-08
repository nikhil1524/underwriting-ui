import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _url: string = "/assets/Data/Customer.json";

  constructor(private http: HttpClient) { }

  getCustomer(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this._url);
  }
}
