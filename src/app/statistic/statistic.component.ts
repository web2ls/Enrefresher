import { Component, OnInit } from '@angular/core';
import { WordService } from '../services/word.service';
import { Observable } from 'rxjs/Observable';
import { LearnedWordService } from '../services/learned-word.service';

@Component({
  selector: 'statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  totalWordsInProccess$: Observable<number>;
  totalLearnedWords$: Observable<number>;
  isShowContent: boolean = true;

  constructor(
    private learnedWordService: LearnedWordService,
    private wordService: WordService) { }

  ngOnInit() {
    this.totalWordsInProccess$ = this.wordService.totalWordsInProccess();
    this.totalLearnedWords$ = this.learnedWordService.totalLearnedWords();

    if (window.innerWidth <= 768) this.isShowContent = false;
  }

  toggleContent() {
    this.isShowContent = !this.isShowContent;
  }

}
