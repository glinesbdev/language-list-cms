import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ILogin } from './login';
import { StorageManagerService } from 'app/shared/storage.manager';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private storageManger: StorageManagerService) { }

  model: ILogin;
  errors: string[] = [];
  email: string;
  password: string;
  rememberMe: boolean = false;

  ngOnInit() {
    if (this.storageManger.getLogin()) {
      let data = this.storageManger.getLogin();

      if (data['userId']) {
        this.router.navigate(['/user', data['userId']]);
      }
    }
  }

  onSubmit(event): void {
    event.preventDefault();
    this.loginService.login(this.email, this.password, this.rememberMe).subscribe(
      login => this.goToUserPage(login),
      error => {
        this.errors = JSON.parse(error._body)['errors'];
        this.email = this.password = '';
      }
    );
  }

  goToUserPage(login: any): void {
    if (!isNaN(+login.id) || +login.id > 0) {
      this.router.navigate(['/user', login.id, { rememberMe: this.rememberMe, userId: login.id }]);
    }
  }

}
