import { Injectable } from '@angular/core';
import { Http } from '@angular/http/src/http';
import { Headers } from '@angular/http/src/headers';
import { Response } from '@angular/http/src/static_response';
import { StorageManagerService } from 'app/shared/storage.manager';
import { Observable } from 'rxjs/Observable';
import { IWordList } from './word-list';
import 'rxjs';
import { RequestOptions } from '@angular/http/src/base_request_options';

@Injectable()
export class WordListService {

  constructor(private http: Http, private storageManager: StorageManagerService) { 
    if (storageManager.getLogin()) {
      this.headers = storageManager.getLogin()['headers'];
    }
  }

  private headers = Object;
  private apiUrl = 'http://localhost:3000/api/v1/word_list';

  getWordLists(): Observable<Array<IWordList>> {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'access-token': this.headers['access-token'][0],
      'client': this.headers['client'][0],
      'expiry': this.headers['expiry'][0],
      'token-type': this.headers['token-type'][0],
      'uid': this.headers['uid'][0]
    });

    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.apiUrl}.json`, options)
      .map((data: Response) => data.json())
      .catch((err: Response) => Observable.throw(err || 'Server error'));
  }

}
