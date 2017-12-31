import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { UserService } from 'app/user/user.service';
import { IUser } from 'app/user/user';
import { StorageManagerService } from '../shared/storage.manager';
import { WordListService } from '../word-list/word-list.service';
import { IWordList } from '../word-list/word-list';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService, private storageManager: StorageManagerService, private wordListService: WordListService) { }

  model: IUser;
  lists: IWordList[] = [];
  userLoaded: boolean = false;
  listsLoaded: boolean = false;
  message: string;
  errors: string[] = [];

  ngOnInit() {
    if (!this.storageManager.getLogin()) {
      this.router.navigate(['/login']);
    } else {
      let userId: number = undefined;

      if (this.route.snapshot.params['id']) {
        userId = this.route.snapshot.params['id'];
      } else {
        userId = this.route.snapshot.queryParams['userId'];
      }

      this.userService.getUser(userId).subscribe(
        user => {
          this.model = user;
          this.userLoaded = true;
        },
        error => console.error(error)
      );

      this.wordListService.getLists().subscribe(
        lists => {
          lists.map((list: any, index: number) => this.lists.push(list.list));
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

  onListDelete(list: IWordList): void {
    if (confirm(`Do you really want to delete ${list.name}?`)) {
      this.wordListService.deleteList(list.id).subscribe(
        data => {
          let index = this.lists.findIndex((item: IWordList) => item === list);
          this.message = data;
          this.lists = this.lists.splice(index, index);
        },
        error => this.errors.push(error)
      );
    }
  }

  trackByList(index: number, list: IWordList): number {
    return list.id;
  }

}
