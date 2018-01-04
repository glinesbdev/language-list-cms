import { Injectable } from '@angular/core';
import { Http } from '@angular/http/src/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { Headers } from '@angular/http/src/headers';
import { ITranslation } from './translation';
import 'rxjs';

@Injectable()
export class TranslationService {

  constructor(private http: Http) {}

  private apiUrl: string = 'http://localhost:3000/api/v1/translate';

  translate(from: string, to: string, words: string[]): Observable<ITranslation> {
    let body = { from: from, to: to, words: words };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.apiUrl}.json`, body, options)
      .map((data: Response) => data.json())
      .catch((err: Response) => Observable.throw(err || 'Server error'));
  }

  getLanguages(): Observable<string[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.apiUrl}/langauges.json`, options)
      .map((data: Response) => data.json().languages)
      .catch((err: Response) => Observable.throw(err || 'Server error'));      
  }

}