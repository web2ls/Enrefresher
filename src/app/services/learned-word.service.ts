import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { WordService } from './word.service';
import { Word } from '../models/word';
import 'rxjs/add/operator/map';

@Injectable()
export class LearnedWordService {

  constructor(
    private db: AngularFireDatabase) { 

    }

  addLearnedWord(word) {
    this.db.list('/learnedWords').push(word);
  }  

  // moveToLearned(word) {
  //   this.addLearnedWord(word);
  //   this.wordService.deleteWord(word.key);
  // }

  // moveWordToProcess(word) {
  //   this.wordService.addWord({ originalWord: word.originalWord, translatedWord: word.translatedWord });
  //   this.deleteLearnedWord(word.key);
  // }

  totalLearnedWords() {
    return this.db.list('/learnedWords')
      .valueChanges()
      .map(words => words.length);
  }

  getAll() {
    return this.db.list('/learnedWords')
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }

  deleteLearnedWord(wordId: string) {
    this.db.list('/learnedWords').remove(wordId);
  }

}
