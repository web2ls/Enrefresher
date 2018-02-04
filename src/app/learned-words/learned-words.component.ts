import { Component, OnInit } from '@angular/core';
import { LearnedWordService } from '../services/learned-word.service';
import { Observable } from 'rxjs/Observable';
import { Word } from '../models/word';
import { WordService } from '../services/word.service';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'learned-words',
  templateUrl: './learned-words.component.html',
  styleUrls: ['./learned-words.component.css']
})
export class LearnedWordsComponent implements OnInit {
  words$: Observable<any[]>;
  currentUser: firebase.User;

  constructor(private wordService: WordService,
    private auth: AuthService,
    private learnedWordsService: LearnedWordService) { 
      this.currentUser = this.auth.currentUser;
    }

  ngOnInit() {
    this.words$ = this.learnedWordsService.getAll(this.currentUser.uid);
  }

  moveWordToProcess(word: Word) {
    this.wordService.addWord({
      originalWord: word.originalWord,
      translatedWord: word.translatedWord
    });
    this.learnedWordsService.deleteLearnedWord(word.key);
  }

}
