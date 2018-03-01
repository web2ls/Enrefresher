import { Component, OnInit } from '@angular/core';
import { LearnedWordService } from '../services/learned-word.service';
import { Observable } from 'rxjs/Observable';
import { Word } from '../models/word';
import { WordService } from '../services/word.service';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
import 'rxjs/add/operator/take';

@Component({
  selector: 'learned-words',
  templateUrl: './learned-words.component.html',
  styleUrls: ['./learned-words.component.css']
})
export class LearnedWordsComponent implements OnInit {
  words$: Observable<any[]>;
  words: Word[];
  filteredWords: Word[];
  currentUser: firebase.User;
  searchValue: string = '';

  constructor(private wordService: WordService,
    private auth: AuthService,
    private learnedWordsService: LearnedWordService) { 
      this.currentUser = this.auth.currentUser;
    }

  ngOnInit() {
    this.learnedWordsService.getAll(this.currentUser.uid)
      .take(1)
      .subscribe(words => {
        this.words = words;
        this.filteredWords = this.words;
      })
    //this.words$ = this.learnedWordsService.getAll(this.currentUser.uid);
  }

  moveWordToProcess(word: Word) {
    this.wordService.addWord({
      userId: word.userId,
      originalWord: word.originalWord,
      translatedWord: word.translatedWord
    });
    this.learnedWordsService.deleteLearnedWord(word.key);
  }

  searchWords(searchValue) {
    console.log(searchValue);
    let tempArr = this.words.filter(word => word.originalWord.indexOf(searchValue) !== -1);
    if (tempArr.length !== 0) {
      this.filteredWords = tempArr;
      return;
    };
    tempArr = this.words.filter(word => word.translatedWord.indexOf(searchValue) !== -1);
    this.filteredWords = tempArr;
  }

}
