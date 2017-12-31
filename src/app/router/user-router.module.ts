import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { WordListDetailComponent } from '../word-list/word-list-detail.component';
import { WordListAddComponent } from '../word-list/word-list-add.component';
import { WordListEditComponent } from '../word-list/word-list-edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'user/:id', component: UserComponent },
      { path: 'word-list/new', component: WordListAddComponent },
      { path: 'word-list/:id/edit', component: WordListEditComponent },
      { path: 'word-list/:id', component: WordListDetailComponent },
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class UserRouterModule { }
