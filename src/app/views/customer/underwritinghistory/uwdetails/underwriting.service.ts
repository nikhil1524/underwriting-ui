import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUnderwriting} from './Underwriting';
import {environment} from '../../../../../environments/environment';
import { IDocument } from './document';



@Injectable({
    providedIn: 'root'
})
export class UnderwriterService {

    private _url: string = '/assets/Data/Underwriter.json';
    private url: string = environment.baseUrl;

    constructor(private http: HttpClient) {
    }

    getUnderwriter(ssn, applicationId): Observable<IUnderwriting[]> {
        console.log(this.url + ssn + '/app-details/' + applicationId);
        return this.http.get<IUnderwriting[]>(this.url + ssn + '/app-details/' + applicationId);
    }

    getDocuments(ssn, applicationId): Observable<IDocument[]> {
       return this.http.get<IDocument[]>('/assets/Data/Document.json');
    }
}
