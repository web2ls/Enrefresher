import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsInProccessComponent } from './words-in-proccess.component';

describe('WordsInProccessComponent', () => {
  let component: WordsInProccessComponent;
  let fixture: ComponentFixture<WordsInProccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsInProccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsInProccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
