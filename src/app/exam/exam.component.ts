import { Component, OnInit } from '@angular/core';
import { Word } from '../models/word';
import { WordService } from '../services/word.service';
import 'rxjs/add/operator/take';

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

  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.wordService.getAll()
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
