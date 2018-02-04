import { Component, OnInit } from '@angular/core';
import { Word } from '../models/word';
import { WordService } from '../services/word.service';
import { log } from 'util';

@Component({
  selector: 'new-word-form',
  templateUrl: './new-word-form.component.html',
  styleUrls: ['./new-word-form.component.css']
})
export class NewWordFormComponent implements OnInit {
  isShowContent: boolean = true;

  constructor(private wordService: WordService) { }

  ngOnInit() {
    if (window.innerWidth <= 768) this.isShowContent = false;
  }

  addWord(word: Word, $event) {
    for (let key in word) {
      word[key] = word[key].toLowerCase();
    };
    this.wordService.addWord(word);
    $event.target.originalWord.value = '';
    $event.target.translatedWord.value = '';
  }

  toggleContent() {
    this.isShowContent = !this.isShowContent;
  }

}
