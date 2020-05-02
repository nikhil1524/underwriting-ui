import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import { IHealthStatus } from './health-status';



@Injectable({
    providedIn: 'root'
})
export class HealthStatus {

    private _url: string = '/assets/Data/HealthStatus.json';
    private url: string = environment.baseUrl;

    constructor(private http: HttpClient) {
    }

    getData(ssn, applicationId): Observable<IHealthStatus[]> {
        return this.http.get<IHealthStatus[]>(this._url);
    }


}
