import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Restaurant } from '../restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private dbPath = '/restaurant/'; //tabel di db
  restoRef: AngularFireList<Restaurant> = null;
  resto: Observable<any[]>;

  constructor(
    private db: AngularFireDatabase
  ) { 
    this.restoRef = db.list(this.dbPath); //ambil list resto dari tabel database/restaurant
  }

  getAllResto(): AngularFireList<Restaurant>{
    return this.restoRef; //pass data list resto ke view
  }

  addResto(resto: Restaurant): any{
    return this.restoRef.push(resto); //nge-push resto baru ke list resto (db)
  }

  deleteResto(key: string): Promise<void>{
    return this.restoRef.remove(key); //hapus resto (dgn key tersebut) dari list resto (db)
  }

  updateResto(key: string, resto: any){
    
  }
}
