import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IApplication } from './Application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private _url: string = "/assets/Data/Application.json";

  constructor(private http: HttpClient) { }

  getApplication(): Observable<IApplication[]> {
    return this.http.get<IApplication[]>(this._url);
  }
}
