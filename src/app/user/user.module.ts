import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRouterModule } from '../router/user-router.module';
import { WordListDetailComponent } from '../word-list/word-list-detail.component';

@NgModule({
  imports: [
    CommonModule,
    UserRouterModule
  ],
  declarations: [UserComponent, WordListDetailComponent],
  exports: [UserRouterModule]
})
export class UserModule { }
