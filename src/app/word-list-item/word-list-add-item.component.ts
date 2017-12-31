import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { WordListItemService } from '../word-list-item/word-list-item.service';
import { IWordListItem } from 'app/word-list-item/word-list-item';

@Component({
  templateUrl: './word-list-add-item.component.html',
  styleUrls: ['./word-list-add-item.component.css']
})
export class WordListAddItemComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private wordListItemService: WordListItemService) {}

  listId: number;
  listName: string;
  model: IWordListItem = new IWordListItem();

  ngOnInit() {
    this.listId = this.route.snapshot.queryParams['listId'];
    this.listName = this.route.snapshot.queryParams['listName'];
    this.model.word_list_id = this.listId;
  }

  onSubmit(event): void {
    event.preventDefault();
    this.wordListItemService.addItem(this.model).subscribe(
      item => { this.router.navigate(['/word-list', this.listId]) },
      error => console.error(error)
    );
  }

}
