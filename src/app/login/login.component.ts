import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ILogin } from './login';
import { LoginModel } from './login.model';
import { StorageManagerService } from 'app/shared/storage.manager';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private storageManger: StorageManagerService) { }

  model: LoginModel = new LoginModel('', '');
  errors: string[] = [];

  ngOnInit() {
    if (this.storageManger.getLogin()) {
      let data = this.storageManger.getLogin();

      if (data['userId'] > 0) {
        this.router.navigate(['/user', data['userId']]);
      }
    }
  }

  onSubmit(event): void {
    event.preventDefault();
    this.loginService.login(this.model).subscribe(
      login => this.goToUserPage(login.data),
      error => {
        this.errors = JSON.parse(error._body)['errors'];
        this.model.email = this.model.password = '';
      }
    );
  }

  goToUserPage(login: any): void {
    if (!isNaN(+login.id) || +login.id > 0) {
      this.router.navigate(['/user', login.id]);
    }
  }

}
