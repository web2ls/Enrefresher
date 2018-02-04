import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Word } from '../models/word';
import 'rxjs/add/operator/map';
import { LearnedWordService } from './learned-word.service';

@Injectable()
export class WordService {

  constructor(
    private learnedWordService: LearnedWordService,
    private db: AngularFireDatabase) { }

  addWord(word) {
    this.db.list('/words').push(word);
  }

  getAll() {
    return this.db.list('/words')
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val()  }));
      })
  }

  moveToLearned(word: Word) {
    this.learnedWordService.addLearnedWord({ 
      originalWord: word.originalWord,
      translatedWord: word.translatedWord 
    });
    this.deleteWord(word.key);
   }

  deleteWord(wordId: string) {
    this.db.list('/words').remove(wordId);
  }

  totalWordsInProccess() {
    return this.db.list('/words').valueChanges()
      .map(words => words.length);
  }

}
