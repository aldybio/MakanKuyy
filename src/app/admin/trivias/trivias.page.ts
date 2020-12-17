import { Component, OnInit } from '@angular/core';
import { Trivia } from 'src/app/trivia'; //model
import { TriviaService } from 'src/app/services/trivia.service'; //service
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-trivias',
  templateUrl: './trivias.page.html',
  styleUrls: ['./trivias.page.scss'],
})
export class TriviasPage implements OnInit { 
  trivias: any;

  constructor(
    private triviaService: TriviaService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.triviaService.getAllTrivia().snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    ).subscribe(data => {
      this.trivias = data;
      console.log('Trivias: ', this.trivias);
    });
  }

}
