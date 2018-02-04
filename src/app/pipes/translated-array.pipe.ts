import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translatedArray'
})
export class TranslatedArrayPipe implements PipeTransform {

  transform(translatedWord: string): string {
    if (translatedWord.includes(','))
      return `[ ${translatedWord} ]`;
    
    return translatedWord;
  }

}
