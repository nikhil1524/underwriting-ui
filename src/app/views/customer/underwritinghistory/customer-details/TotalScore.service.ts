import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import { IHealthStatus } from '../health-status/health-status';



@Injectable({
    providedIn: 'root'
})
export class TotalScore {

    private _url: string = '/assets/Data/HealthStatus.json';
    private url: string = environment.baseUrl;

    constructor(private http: HttpClient) {
    }

    getData(ssn, applicationId): Observable<IHealthStatus> {
        const url= this.url + ssn + '/app-details/' + applicationId + '/rules';
        console.log(url);
        return this.http.get<IHealthStatus>(url);
    }

}
