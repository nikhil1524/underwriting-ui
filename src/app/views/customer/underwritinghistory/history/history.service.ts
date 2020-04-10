import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHistory } from './History';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private _url: string = "/assets/Data/History.json";

  constructor(private http: HttpClient) { }

  getHistory(): Observable<IHistory[]> {
    return this.http.get<IHistory[]>(this._url);
  }
}
