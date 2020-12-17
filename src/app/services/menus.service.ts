import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Menu } from 'src/app/menu';

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  private dbPath = '/menu';
  menuRef: AngularFireList<Menu> = null;
  

  constructor(private db: AngularFireDatabase) {
    this.menuRef = db.list(this.dbPath); //ambil semua menu
  }

  getMenus(): AngularFireList<Menu>{
    return this.menuRef;
  }
}
