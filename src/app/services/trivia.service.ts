import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Trivia } from 'src/app/trivia';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  private dbPath = '/trivia/';
  triviaRef: AngularFireList<Trivia> = null;

  constructor(
    private db: AngularFireDatabase
  ) { 
    this.triviaRef = db.list(this.dbPath); // ambil list dari tabel database
  }

  getAllTrivia(): AngularFireList<Trivia>{
    return this.triviaRef; //pass seluruh trivia
  }

  addTrivia(trivia: Trivia): any{
    return this.triviaRef.push(trivia); //push trivia baru ke list trivia
  }

  deleteTrivia(key: string): Promise<void>{
    return this.triviaRef.remove(key); //hapus trivia dgn key tsb dari list
  }

  updateTrivia(key: string, trivia: any){
    
  }
}
