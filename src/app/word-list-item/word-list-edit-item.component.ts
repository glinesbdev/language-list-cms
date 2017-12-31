import { Component, OnInit } from '@angular/core';
import { WordListItemService } from './word-list-item.service';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { WordListItemModel } from './word-list-item.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './word-list-edit-item.component.html',
  styleUrls: ['./word-list-edit-item.component.css']
})
export class WordListEditItemComponent implements OnInit {

  constructor(private wordListItemService: WordListItemService, private router: Router, private route: ActivatedRoute) { }

  model: WordListItemModel;
  itemLoaded: boolean = false;
  listId: number;
  listName: string;

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.listId = this.route.snapshot.queryParams['listId'];
    this.listName = this.route.snapshot.queryParams['listName'];

    this.wordListItemService.getItem(id).subscribe(
      item => {
        this.model = item;
        this.itemLoaded = true;
      },
      error => console.error(error)
    );
  }

  onSubmit(event): void {
    event.preventDefault();

    this.wordListItemService.editItem(this.model).subscribe(
      item => this.router.navigate(['/word-list', this.listId]),
      error => console.error(error)
    );
  }

}
