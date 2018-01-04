import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail.component';
import { UserRouterModule } from '../router/user-router.module';
import { WordListDetailComponent } from '../word-list/word-list-detail.component';
import { WordListNewComponent } from '../word-list/word-list-new.component';
import { WordListAddItemComponent } from '../word-list-item/word-list-add-item.component';
import { FormsModule } from '@angular/forms';
import { WordListEditItemComponent } from '../word-list-item/word-list-edit-item.component';

@NgModule({
  imports: [
    CommonModule,
    UserRouterModule,
    FormsModule
  ],
  declarations: [
    UserComponent,
    UserDetailComponent,
    WordListDetailComponent,
    WordListNewComponent,
    WordListAddItemComponent,
    WordListEditItemComponent
  ],
  exports: [UserRouterModule]
})
export class UserModule { }
