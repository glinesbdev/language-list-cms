/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WordListService } from './word-list.service';

describe('WordListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordListService]
    });
  });

  it('should ...', inject([WordListService], (service: WordListService) => {
    expect(service).toBeTruthy();
  }));
});
