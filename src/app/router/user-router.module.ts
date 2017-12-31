import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { WordListDetailComponent } from '../word-list/word-list-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'user/:id', component: UserComponent },
      { path: 'word-list/:id', component: WordListDetailComponent }
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class UserRouterModule { }
