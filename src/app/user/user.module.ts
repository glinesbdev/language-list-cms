import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRouterModule } from '../router/user-router.module';
import { WordListDetailComponent } from '../word-list/word-list-detail.component';
import { WordListAddComponent } from '../word-list/word-list-add.component';
import { FormsModule } from '@angular/forms';
import { WordListEditComponent } from '../word-list/word-list-edit.component';

@NgModule({
  imports: [
    CommonModule,
    UserRouterModule,
    FormsModule
  ],
  declarations: [UserComponent, WordListDetailComponent, WordListAddComponent, WordListEditComponent],
  exports: [UserRouterModule]
})
export class UserModule { }
