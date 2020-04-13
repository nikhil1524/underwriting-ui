import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IApplication} from './Application';
import {environment} from '../../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApplicationService {

    private _url: string = '/assets/Data/Application.json';
    private url: string = environment.baseUrl;

    constructor(private http: HttpClient) {
    }

    getApplication(ssn, year): Observable<IApplication[]> {
        let url = this.url + ssn + '/app-details';
        console.log(url);
        return this.http.get<IApplication[]>(url, {
            params: {
                year: year,
            }
        });
    }
}
