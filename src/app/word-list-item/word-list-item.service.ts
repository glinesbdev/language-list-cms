import { Injectable } from '@angular/core';
import { Http } from '@angular/http/src/http';
import { Headers } from '@angular/http/src/headers';
import { Response } from '@angular/http/src/static_response';
import { Observable } from 'rxjs/Observable';
import { StorageManagerService } from 'app/shared/storage.manager';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { IWordListItem } from './word-list-item';
import 'rxjs';

@Injectable()
export class WordListItemService {

  constructor(private http: Http, private storageManager: StorageManagerService) { 
    if (storageManager.getLogin()) {
      this.headers = storageManager.getLogin()['headers'];
    }
  }

  private headers: Object;
  private apiUrl: string = 'http://localhost:3000/api/v1/word_list_item';

  getItem(id: number): Observable<IWordListItem> {
    let headers = this.populateHeaders();
    let options = this.populateOptions(headers);

    return this.http.get(`${this.apiUrl}/${id}.json`, options)
      .map((data: Response) => data.json())
      .catch((err: any) => Observable.throw(err || 'Server error'));
  }

  addItem(body: Object): Observable<IWordListItem> {
    let headers = this.populateHeaders();
    let options = this.populateOptions(headers);

    return this.http.post(`${this.apiUrl}.json`, body, options)
      .map((data: Response) => data.json())
      .catch((err: any) => Observable.throw(err || 'Server error'));
  }

  editItem(body: Object): Observable<any> {
    let id = body['id'];
    let headers = this.populateHeaders();
    let options = this.populateOptions(headers);

    return this.http.put(`${this.apiUrl}/${id}.json`, body, options)
      .map((data: Response) => data.json())
      .catch((err: any) => Observable.throw(err || 'Server error'));
  }

  deleteItem(id: number): Observable<any> {
    let headers = this.populateHeaders();
    let options = this.populateOptions(headers);

    return this.http.delete(`${this.apiUrl}/${id}.json`, options)
      .map((data: Response) => data.json())
      .catch((err: any) => Observable.throw(err || 'Server error'));
  }

  private populateHeaders(): Headers {
    return new Headers({
      'Content-Type': 'application/json',
      'access-token': this.headers['access-token'][0],
      'client': this.headers['client'][0],
      'expiry': this.headers['expiry'][0],
      'token-type': this.headers['token-type'][0],
      'uid': this.headers['uid'][0]
    });
  }

  private populateOptions(headers: Headers): RequestOptions {
    return new RequestOptions({ headers: headers });
  }

}
