/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WordListAddComponent } from './word-list-add.component';

describe('WordListAddComponent', () => {
  let component: WordListAddComponent;
  let fixture: ComponentFixture<WordListAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordListAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
