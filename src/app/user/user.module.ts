import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRouterModule } from '../router/user-router.module';

@NgModule({
  imports: [
    CommonModule,
    UserRouterModule
  ],
  declarations: [UserComponent],
  exports: [UserRouterModule]
})
export class UserModule { }
