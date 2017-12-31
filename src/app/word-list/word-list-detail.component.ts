import { Component, OnInit } from '@angular/core';
import { WordListService } from './word-list.service';
import { ActivatedRoute } from '@angular/router';
import { WordListModel } from './word-list.model';
import { IWordList } from './word-list';

@Component({
  templateUrl: './word-list-detail.component.html',
  styleUrls: ['./word-list-detail.component.css']
})
export class WordListDetailComponent implements OnInit {

  constructor(private wordListService: WordListService, private route: ActivatedRoute) { }

  model: WordListModel;
  listLoaded: boolean = false;

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

  private populateList(list: IWordList): WordListModel {
    if (list) {
      let data = list.list;
      return new WordListModel(data.id, data.name, data.language, data.url, data.items, data.user);
    }

    return new WordListModel(0, '', '', '', [], {});
  }

}
