import { Component, OnInit } from '@angular/core';
import { WordService } from '../services/word.service';
import { Observable } from 'rxjs/Observable';
import { Word } from '../models/word';
import { LearnedWordService } from '../services/learned-word.service';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'words-in-proccess',
  templateUrl: './words-in-proccess.component.html',
  styleUrls: ['./words-in-proccess.component.css']
})
export class WordsInProccessComponent implements OnInit {
  words$: Observable<any[]>;
  currentUser: firebase.User;

  constructor(
    private learnedWordService: LearnedWordService,
    private auth: AuthService,
    private wordService: WordService) {
      this.currentUser = this.auth.currentUser;
  }

  ngOnInit() {
    this.words$ = this.wordService.getAll(this.currentUser.uid);
  }

  deleteWord(wordId: string) {
    this.wordService.deleteWord(wordId);
  }

  moveToLearned(word: Word) {
    this.learnedWordService.addLearnedWord({
      userId: this.currentUser.uid,
      originalWord: word.originalWord,
      translatedWord: word.translatedWord
    });
    this.wordService.deleteWord(word.key);
  }

}
