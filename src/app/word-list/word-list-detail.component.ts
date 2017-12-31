import { Component, OnInit } from '@angular/core';
import { WordListService } from './word-list.service';
import { ActivatedRoute } from '@angular/router';
import { IWordList } from './word-list';
import { WordListItemService } from '../word-list-item/word-list-item.service';

@Component({
  templateUrl: './word-list-detail.component.html',
  styleUrls: ['./word-list-detail.component.css']
})
export class WordListDetailComponent implements OnInit {

  constructor(private wordListService: WordListService, private wordListItemService: WordListItemService, private route: ActivatedRoute) { }

  model: IWordList;
  listLoaded: boolean = false;
  message: string;

  ngOnInit() {
    let listId: number = this.route.snapshot.params['id'];
    this.wordListService.getList(listId).subscribe(
      list => {
        this.model = list;
        this.listLoaded = true;
      },
      error => console.error(error)
    );
  }

  deleteItem(id: number): void {
    this.wordListItemService.deleteItem(id).subscribe(
      item => {
        this.message = item['message'];
        this.model.items = this.model.items.splice(id, id);
      },
      error => console.error(error)
    );
  }

  trackByItem(index: number, item: any): number {
    return item.item.id;
  }

}
