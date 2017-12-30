import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { ILogin } from 'app/login/login';
import { LoginModel } from './login.model';
import { ElectronService } from 'ngx-electron';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private electronService: ElectronService) { }

  login: ILogin;
  model: LoginModel = new LoginModel('', '');
  loginError: string;
  rememberMe: boolean = false;

  ngOnInit() {
  }

  onSubmit(event): void {
    event.preventDefault();
    console.log(this.model);
    this.loginService.login(this.model).subscribe(
      login => {
        this.login = login;
        if (this.rememberMe) {
          this.saveLogin(login);
        }
      },
      error => this.loginError = error
    );
  }

  private saveLogin(login: ILogin) {
    this.electronService.ipcRenderer.sendSync('login:success', login);
  }

}
