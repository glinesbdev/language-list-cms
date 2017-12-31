import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { Component } from "@angular/core/src/metadata/directives";
import { WordListService } from "./word-list.service";
import { ActivatedRoute } from "@angular/router/src/router_state";
import { IWordList } from "app/word-list/word-list";
import { IWordListItem } from "app/word-list-item/word-list-item";
import { WordListItemService } from "app/word-list-item/word-list-item.service";
import { Router } from "@angular/router";
import { UserService } from "app/user/user.service";
import { IUser } from "app/user/user";

@Component({
  templateUrl: './word-list-new.component.html',
  styleUrls: ['./word-list-new.component.css']
})
export class WordListNewComponent implements OnInit {

  constructor (private wordListService: WordListService, private wordListItemService: WordListItemService, private userService: UserService, private route: ActivatedRoute, private router: Router) {}

  list: IWordList = new IWordList();
  userId: number;
  user: IUser;
  errors: string[] = [];
  dataLoaded: boolean = false;

  ngOnInit() {
    this.userId = this.route.snapshot.queryParams['userId'];
    this.userService.getUser(this.userId).subscribe(
      user => {
        this.user = user;
        this.dataLoaded = true;
      },
      error => this.errors.push(error)
    );
  }

  onSubmit(): void {
    this.wordListService.addList(this.list).subscribe(
      list => this.router.navigate(['/user', this.userId]),
      error => this.errors.push(error)
    );
  }

}