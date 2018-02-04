import { Component, OnInit } from '@angular/core';
import { WordService } from '../services/word.service';
import { Observable } from 'rxjs/Observable';
import { Word } from '../models/word';
import { LearnedWordService } from '../services/learned-word.service';

@Component({
  selector: 'words-in-proccess',
  templateUrl: './words-in-proccess.component.html',
  styleUrls: ['./words-in-proccess.component.css']
})
export class WordsInProccessComponent implements OnInit {
  words$: Observable<any[]>;

  constructor(
    private learnedWordService: LearnedWordService,
    private wordService: WordService) { }

  ngOnInit() {
    this.words$ = this.wordService.getAll();
  }

  deleteWord(wordId: string) {
    this.wordService.deleteWord(wordId);
  }

  moveToLearned(word: Word) {
    this.learnedWordService.addLearnedWord({
      originalWord: word.originalWord,
      translatedWord: word.translatedWord
    });
    this.wordService.deleteWord(word.key);
  }

}
