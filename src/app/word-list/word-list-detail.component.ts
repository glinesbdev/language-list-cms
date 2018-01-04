import { Component, OnInit } from '@angular/core';
import { WordListService } from './word-list.service';
import { ActivatedRoute } from '@angular/router';
import { IWordList } from './word-list';
import { WordListItemService } from '../word-list-item/word-list-item.service';
import { IWordListItem } from 'app/word-list-item/word-list-item';

@Component({
  templateUrl: './word-list-detail.component.html',
  styleUrls: ['./word-list-detail.component.css']
})
export class WordListDetailComponent implements OnInit {

  constructor(private wordListService: WordListService, private wordListItemService: WordListItemService, private route: ActivatedRoute) { }

  model: IWordList;
  message: string;
  listLoaded: boolean = false;

  ngOnInit() {
    let listId: number = this.route.snapshot.params['id'];
    this.getList(listId);
  }

  private getList(listId: number) {
    this.wordListService.getList(listId).subscribe(list => {
      this.model = list;
      this.listLoaded = true;
    }, error => console.error(error));
  }

  deleteItem(item: IWordListItem): void {
    if (confirm(`Do you really want to delete ${item.word}?`)) {
      this.wordListItemService.deleteItem(item.id).subscribe(item => {
          let index = this.model.items.indexOf(item, 0);
          this.message = item['message'];
          this.model.items = this.model.items.splice(index, 0);
          this.getList(this.model.id); 
        }, error => console.error(error));
    }
  }

  trackByItem(index: number, item: IWordListItem) {
    return item.id;
  }

}
