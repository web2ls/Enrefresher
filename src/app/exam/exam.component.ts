import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Word } from '../models/word';
import { WordService } from '../services/word.service';
import 'rxjs/add/operator/take';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';
import { KeyEventService } from '../services/key-event.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit, OnDestroy, AfterViewInit {
  words: Word[] = [];
  examWord: Word;
  index: number;
  prevIndex: number;
  currentUser: firebase.User;
  keyEventSubscriptor: Subscription;
  @ViewChild('nextWordInput') nextWordInputElem: ElementRef;

  constructor(private wordService: WordService,
    private keyEventService: KeyEventService, 
    private auth: AuthService) {
    this.currentUser = this.auth.currentUser;
   }

  ngOnInit() {
    this.keyEventSubscriptor = this.keyEventService.getEnterKeyListener()
    .subscribe(() => {
      this.getRandomWord();
    });

    this.wordService.getAll(this.currentUser.uid)
    .take(1)
    .subscribe(result => {
      this.words = result;
      this.getRandomWord();
      setTimeout(() => this.nextWordInputElem.nativeElement.focus(), 100);
      
    });
  }

  ngAfterViewInit() {
    
  }

  getRandomWord() {
    this.index = Math.floor(Math.random() * this.words.length);
    if (this.prevIndex !== this.index) 
      this.examWord = this.words[this.index];

    this.index = Math.floor(Math.random() * this.words.length);
    this.examWord = this.words[this.index];
  }

  ngOnDestroy() {
    this.keyEventSubscriptor.unsubscribe();
  }

}
