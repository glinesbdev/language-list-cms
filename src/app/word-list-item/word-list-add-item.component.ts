import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { WordListItemService } from '../word-list-item/word-list-item.service';
import { IWordListItem } from './word-list-item';
import { TranslationService } from 'app/translation/translation.service';
import { WordListService } from 'app/word-list/word-list.service';
import { IWordList } from 'app/word-list/word-list';
import { Observable } from 'rxjs/Observable';
import { ITranslation } from 'app/translation/translation';
import { setTimeout } from 'timers';
const { remote , ipcRenderer } = require('electron');

@Component({
  templateUrl: './word-list-add-item.component.html',
  styleUrls: ['./word-list-add-item.component.css']
})
export class WordListAddItemComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private wordListService: WordListService, private wordListItemService: WordListItemService, private translationSerivce: TranslationService) {}

  listId: number;
  listName: string;
  model: IWordListItem = new IWordListItem();
  list: IWordList = new IWordList();
  listLoaded: boolean = false;

  ngOnInit() {
    this.listId = this.route.snapshot.queryParams['listId'];
    this.listName = this.route.snapshot.queryParams['listName'];
    this.model.word_list_id = this.listId;
    this.wordListService.getList(this.listId).subscribe(
      list => {
        this.list = list;
        this.listLoaded = true;
      },
      error => console.error(error)
    );

    ipcRenderer.on('translate:success', (event, result) => {
      this.model.translation = <string>result;
    });
  }

  onSubmit(event): void {
    event.preventDefault();
    this.wordListItemService.addItem(this.model).subscribe(
      item => { this.router.navigate(['/word-list', this.listId]) },
      error => console.error(error)
    );
  }

  onGetTranslation(): void {
    this.translationSerivce.translate(this.list.user.language, this.list.language, [this.model.word]).subscribe(
      result => {
        ipcRenderer.send('translate', result);
      },
      error => console.error(error)
    );
  }

  showTranslationButton(): boolean {
    return (this.model.word && this.model.word.length && this.listLoaded) ? true : false;
  }

}
