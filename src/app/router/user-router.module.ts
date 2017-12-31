import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { WordListDetailComponent } from '../word-list/word-list-detail.component';
import { WordListAddItemComponent } from '../word-list-item/word-list-add-item.component';
import { WordListEditItemComponent } from '../word-list-item/word-list-edit-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'user/:id', component: UserComponent },
      { path: 'word-list-item/new', component: WordListAddItemComponent },
      { path: 'word-list-item/:id/edit', component: WordListEditItemComponent },
      { path: 'word-list/:id', component: WordListDetailComponent },
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class UserRouterModule { }
