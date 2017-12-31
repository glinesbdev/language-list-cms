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

  login(email: string, password: string, rememberMe: boolean = false): Observable<ILogin> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = {
      email: email,
      password: password
    };
    
    let savedObj = {
      userId: undefined,
      headers: undefined
    };
    
    return this.http.post(`${this.authUrl}/sign_in`, body, options)
      .map((data: Response) => {
        if (rememberMe) {
          savedObj.userId = data.json().data.id;
        }

        savedObj.headers = data.headers.toJSON();
        this.storageManager.setLogin(JSON.stringify(savedObj));
        return data.json().data;
      })
      .catch((err: Response) => Observable.throw(err || 'Server error'));
  }

}
