import { Injectable } from '@angular/core';
import { Http } from '@angular/http/src/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { Headers } from '@angular/http/src/headers';
import { StorageManagerService } from '../shared/storage.manager';
import 'rxjs';

import { ILogin } from './login';

@Injectable()
export class LoginService {

  constructor(private http: Http, private storageManager: StorageManagerService) { }

  private authUrl: string = 'http://localhost:3000/auth';

  login(body: Object): Observable<ILogin> {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(`${this.authUrl}/sign_in`, body, options)
      .map((data: Response) => {
        this.storageManager.setLogin(JSON.stringify({
          userId: data.json().data.id,
          headers: data.headers.toJSON()
        }));

        return data.json();
      })
      .catch((err: Response) => Observable.throw(err || 'Server error'));
  }

}
