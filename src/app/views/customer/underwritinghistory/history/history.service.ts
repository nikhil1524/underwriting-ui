import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {IHistory} from './History';
import {environment} from '../../../../../environments/environment';
import {delay} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HistoryService {

    private _url: string = '/assets/Data/History.json';
    private url: string = environment.baseUrl;

    constructor(private http: HttpClient) {
    }

    getHistory(ssn): Observable<IHistory[]> {
        return this.http.get<IHistory[]>(this.url + '/search', {
            params: {
                ssn: ssn,
            }
        });
    }
}
