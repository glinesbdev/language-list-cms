import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IUser } from './user';
import { Headers } from '@angular/http/src/headers';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { StorageManagerService } from 'app/shared/storage.manager';
import 'rxjs';

@Injectable()
export class UserService {

  constructor(private http: Http, private storageManager: StorageManagerService) {
    if (storageManager.getLogin()) {
      this.headers = storageManager.getLogin()['headers'];
    }
  }

  private apiPath = 'http://localhost:3000/api/v1/user';
  private headers = Object;

  getUser(id: number): Observable<IUser> {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'access-token': this.headers['access-token'][0],
      'client': this.headers['client'][0],
      'expiry': this.headers['expiry'][0],
      'token-type': this.headers['token-type'][0],
      'uid': this.headers['uid'][0]
    });

    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.apiPath}/${id}.json`, options)
      .map((data: Response) => data.json().user)
      .catch((err: Response) => Observable.throw(err || 'Server error'));
  }

}
