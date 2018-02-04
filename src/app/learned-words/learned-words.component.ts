import { Component, OnInit } from '@angular/core';
import { LearnedWordService } from '../services/learned-word.service';
import { Observable } from 'rxjs/Observable';
import { Word } from '../models/word';
import { WordService } from '../services/word.service';

@Component({
  selector: 'learned-words',
  templateUrl: './learned-words.component.html',
  styleUrls: ['./learned-words.component.css']
})
export class LearnedWordsComponent implements OnInit {
  words$: Observable<any[]>;

  constructor(private wordService: WordService,
    private learnedWordsService: LearnedWordService,) { }

  ngOnInit() {
    this.words$ = this.learnedWordsService.getAll();
  }

  moveWordToProcess(word: Word) {
    this.wordService.addWord({
      originalWord: word.originalWord,
      translatedWord: word.translatedWord
    });
    this.learnedWordsService.deleteLearnedWord(word.key);
  }

}
