import { TestBed, inject } from '@angular/core/testing';

import { LearnedWordService } from './learned-word.service';

describe('LearnedWordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LearnedWordService]
    });
  });

  it('should be created', inject([LearnedWordService], (service: LearnedWordService) => {
    expect(service).toBeTruthy();
  }));
});
