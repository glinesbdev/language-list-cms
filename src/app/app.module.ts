import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { AppRouterModule } from './router/app-router.module';

import { LoginService } from './login/login.service';
import { UserService } from './user/user.service';

import { AppComponent } from './app.component';
import { StorageManagerService } from './shared/storage.manager';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LoginModule,
    UserModule,
    AppRouterModule
  ],
  providers: [
    LoginService,
    UserService,
    StorageManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
