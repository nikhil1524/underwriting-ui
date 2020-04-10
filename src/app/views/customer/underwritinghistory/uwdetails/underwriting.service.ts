import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUnderwriting } from './Underwriting';


@Injectable({
  providedIn: 'root'
})
export class UnderwriterService {

  private _url: string = "/assets/Data/Underwriter.json";

  constructor(private http: HttpClient) { }

  getUnderwriter(): Observable<IUnderwriting[]> {
    return this.http.get<IUnderwriting[]>(this._url);
  }
}
