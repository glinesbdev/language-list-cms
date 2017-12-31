import { Component, OnInit } from '@angular/core';
import { WordListService } from './word-list.service';
import { ActivatedRoute } from '@angular/router';
import { WordListModel } from './word-list.model';
import { IWordList } from './word-list';
import { WordListItemService } from '../word-list-item/word-list-item.service';
import { Router } from '@angular/router/src/router';

@Component({
  templateUrl: './word-list-detail.component.html',
  styleUrls: ['./word-list-detail.component.css']
})
export class WordListDetailComponent implements OnInit {

  constructor(private wordListService: WordListService, private wordListItemService: WordListItemService, private router: Router, private route: ActivatedRoute) { }

  model: WordListModel;
  listLoaded: boolean = false;
  message: string;

  ngOnInit() {
    let listId: number = this.route.snapshot.params['id'];
    this.wordListService.getWordList(listId).subscribe(
      list => {
        this.model = this.populateList(list);
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

  private populateList(list: IWordList): WordListModel {
    if (list) {
      let data = list.list;
      return new WordListModel(data.id, data.name, data.language, data.url, data.items, data.user);
    }

    return new WordListModel(0, '', '', '', [], {});
  }

}
