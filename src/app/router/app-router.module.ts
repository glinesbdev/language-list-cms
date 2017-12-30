import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginModule } from '../login/login.module';

import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' } 
    ])
  ],
  declarations: [],
  exports: [LoginModule, RouterModule]
})
export class AppRouterModule { }
