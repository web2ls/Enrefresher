import { Component, OnInit } from '@angular/core';
import { Word } from '../models/word';
import { LearnedWordService } from '../services/learned-word.service';
import { WordsInProccessComponent } from '../words-in-proccess/words-in-proccess.component';

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.css']
})
export class WordsListComponent implements OnInit {
  isWordsListActive: boolean = true;
  isExamModeActive: boolean = false;

  constructor(
    private learnedWordService: LearnedWordService) { 
    }

  ngOnInit() {
    
  }

  public onToggleWordsList($event) {
    this.isWordsListActive = !$event;
  }

  public onToggleExamMode($event) {
    this.isExamModeActive = $event;
  }

}
