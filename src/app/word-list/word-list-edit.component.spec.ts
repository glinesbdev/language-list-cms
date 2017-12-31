/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WordListEditComponent } from './word-list-edit.component';

describe('WordListEditComponent', () => {
  let component: WordListEditComponent;
  let fixture: ComponentFixture<WordListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
