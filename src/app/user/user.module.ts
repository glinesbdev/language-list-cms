import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRouterModule } from '../router/user-router.module';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    UserRouterModule
  ],
  declarations: [UserComponent],
  providers: [],
  exports: [UserRouterModule]
})
export class UserModule { }
