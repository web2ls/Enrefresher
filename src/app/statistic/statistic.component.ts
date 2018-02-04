import { Component, OnInit } from '@angular/core';
import { WordService } from '../services/word.service';
import { Observable } from 'rxjs/Observable';
import { LearnedWordService } from '../services/learned-word.service';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  totalWordsInProccess$: Observable<number>;
  totalLearnedWords$: Observable<number>;
  isShowContent: boolean = true;
  currentUser: firebase.User;

  constructor(
    private learnedWordService: LearnedWordService,
    private auth: AuthService,
    private wordService: WordService) {
      this.currentUser = this.auth.currentUser;
  }

  ngOnInit() {
    this.totalWordsInProccess$ = this.wordService.totalWordsInProccess(this.currentUser.uid);
    this.totalLearnedWords$ = this.learnedWordService.totalLearnedWords(this.currentUser.uid);

    if (window.innerWidth <= 768) this.isShowContent = false;
  }

  toggleContent() {
    this.isShowContent = !this.isShowContent;
  }

}
