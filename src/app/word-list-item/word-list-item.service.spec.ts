/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WordListItemService } from './word-list-item.service';

describe('WordListItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordListItemService]
    });
  });

  it('should ...', inject([WordListItemService], (service: WordListItemService) => {
    expect(service).toBeTruthy();
  }));
});
