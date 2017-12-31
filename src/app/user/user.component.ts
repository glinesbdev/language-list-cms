import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { UserService } from 'app/user/user.service';
import { IUser } from 'app/user/user';
import { UserModel } from './user.model';
import { WordListModel } from '../word-list/word-list.model';
import { StorageManagerService } from '../shared/storage.manager';
import { WordListService } from '../word-list/word-list.service';
import { IWordList } from '../word-list/word-list';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService, private storageManager: StorageManagerService, private wordListService: WordListService) { }

  model: UserModel;
  lists: Array<WordListModel>;
  userLoaded: boolean = false;
  listsLoaded: boolean = false;

  ngOnInit() {
    if (!this.storageManager.getLogin()) {
      this.router.navigate(['/login']);
    } else {
      let userId: number = this.route.snapshot.params['id'];
      this.userService.getUser(userId).subscribe(
        user => {
          let data = user.user;
          this.model = this.populateUser(data);
          this.userLoaded = true;
        },
        error => console.error(error)
      );

      this.wordListService.getWordLists().subscribe(
        lists => {
          this.lists = this.populateWordLists(lists);
          this.listsLoaded = true;
        },
        error => console.error(error)
      );
    }
  }

  logout(): void {
    this.storageManager.deleteLogin();
    this.router.navigate(['/login']);
  }

  private populateUser(user: UserModel): UserModel {
    if (user) {
      return new UserModel(user.id, user.email, user.uid, user.url, user.admin, user.username);
    }

    return new UserModel(0, '', '', '', false, '');
  }

  private populateWordLists(lists: Array<IWordList>): Array<WordListModel> {
    let allLists: Array<WordListModel> = [];

    if (lists.length) {
      lists.map((list: IWordList) => {
        let data = list.list;
        let model = new WordListModel(data.id, data.name, data.language, data.url, data.items, data.user);
        allLists.push(model);
      });
    }

    return allLists;
  }

}
