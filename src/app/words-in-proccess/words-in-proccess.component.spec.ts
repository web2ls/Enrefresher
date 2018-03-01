import { WordsInProccessComponent } from './words-in-proccess.component';
import { WordService } from '../services/word.service';
import { LearnedWordService } from '../services/learned-word.service';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

describe('WordsInProccessComponent', () => {
  let component: WordsInProccessComponent;
  let wordService: WordService;
  let authService: AuthService;
  let learnedWordService: LearnedWordService;

  beforeEach(() => {
    wordService = new WordService(null, null);
    learnedWordService = new LearnedWordService(null);
    authService = new AuthService(null);
    component = new WordsInProccessComponent(learnedWordService, authService, wordService);
  });

  it('Shold get array of learned words from the server', () => {
    let words = [1,2,3];

    spyOn(wordService, 'getAll').and.callFake(() => {
      return Observable.from(words);
    });

    component.ngOnInit();

    expect(component.words$).not.toBeUndefined();
  })
})