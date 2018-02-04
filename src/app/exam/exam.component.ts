import { Component, OnInit } from '@angular/core';
import { Word } from '../models/word';
import { WordService } from '../services/word.service';
import 'rxjs/add/operator/take';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  words: Word[] = [];
  examWord: Word;
  index: number;
  prevIndex: number;
  currentUser: firebase.User;

  constructor(private wordService: WordService, private auth: AuthService) {
    this.currentUser = this.auth.currentUser;
   }

  ngOnInit() {
    this.wordService.getAll(this.currentUser.uid)
    .take(1)
    .subscribe(result => {
      this.words = result;
      this.getRandomWord();
    });
  }

  getRandomWord() {
    this.index = Math.floor(Math.random() * this.words.length);
    if (this.prevIndex !== this.index) 
      this.examWord = this.words[this.index];

    this.index = Math.floor(Math.random() * this.words.length);
    this.examWord = this.words[this.index];
  }

}
