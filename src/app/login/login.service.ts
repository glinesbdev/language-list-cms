import { Injectable } from '@angular/core';
import { Http } from '@angular/http/src/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { Headers } from '@angular/http/src/headers';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ILogin } from './login';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  private authUrl: string = 'http://localhost:3000/auth';

  login(body: Object): Observable<ILogin> {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(`${this.authUrl}/sign_in`, body, options)
      .map((data: Response) => data.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

}
