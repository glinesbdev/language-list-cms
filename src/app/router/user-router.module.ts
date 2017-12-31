import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'user/:id', component: UserComponent }
    ])
  ],
  declarations: []
})
export class UserRouterModule { }
