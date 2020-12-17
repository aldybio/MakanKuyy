import { Injectable } from '@angular/core';
import { Trivia } from './trivia.model';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  constructor() { }

  private trivias: Trivia[] = [
    {
      id: 't1',
      content: 'According to CNN Travel Public Vote on World\'s 50 Best Foods, Rendang placed number 1',
      source: 'CNN Travel'
    },
    {
      id: 't2',
      content: 'Initially the Chinese sold soup using pork and then replaced it with chicken and beef.',
      source: 'IDN Times'
    },
    {
      id: 't3',
      content: 'Ini merupakan trivia ketiga',
      source: 'Narasumber #3'
    }
  ];

  getAllTrivias(){
    return [...this.trivias];
  }

  getTrivia(triviaId: string){
    return {...this.trivias.find(trivia => {
      return trivia.id === triviaId;
    })};
  }
}
