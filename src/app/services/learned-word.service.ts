import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { WordService } from './word.service';
import { Word } from '../models/word';
import 'rxjs/add/operator/map';

@Injectable()
export class LearnedWordService {

  constructor(
    private db: AngularFireDatabase) {}

  addLearnedWord(word) {
    this.db.list('/learnedWords').push(word);
  }  

  totalLearnedWords(userId: string) {
    return this.db.list('/learnedWords', ref => ref.orderByChild('userId').equalTo(userId))
    .valueChanges()
    .map(words => words.length);
  }

  getAll(userId: string) {
    return this.db.list('/learnedWords', ref => ref.orderByChild('userId').equalTo(userId))
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })
  }

  deleteLearnedWord(wordId: string) {
    this.db.list('/learnedWords').remove(wordId);
  }

}
