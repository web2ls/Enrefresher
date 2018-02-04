import { Component, OnInit } from '@angular/core';
import { Word } from '../models/word';
import { WordService } from '../services/word.service';
import { AuthService } from '../services/auth.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'new-word-form',
  templateUrl: './new-word-form.component.html',
  styleUrls: ['./new-word-form.component.css']
})
export class NewWordFormComponent implements OnInit {
  isShowContent: boolean = true;
  userId: string;

  constructor(private wordService: WordService, private auth: AuthService) { }

  ngOnInit() {
    if (window.innerWidth <= 768) this.isShowContent = false;
    this.auth.getCurrentUser().take(1).subscribe(user => this.userId = user.uid);
  }

  addWord(word, $event) {
    for (let key in word) {
      word[key] = word[key].toLowerCase();
    };
    this.wordService.addWord({userId: this.userId, ...word});
    $event.target.originalWord.value = '';
    $event.target.translatedWord.value = '';
  }

  toggleContent() {
    this.isShowContent = !this.isShowContent;
  }

}
