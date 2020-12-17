import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { MenusService } from 'src/app/services/menus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.page.html',
  styleUrls: ['./edit-menu.page.scss'],
})
export class EditMenuPage implements OnInit {
  menu: any;
  key: string;

  @ViewChild('f', null) f: NgForm;

  constructor(
    private activatedRoute: ActivatedRoute,
    private restoService: RestaurantService,
    private menuService: MenusService,
    private router: Router,
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('key')) {return ;}
      this.key = paramMap.get('key');

      this.db.object('/menus/' + this.key).valueChanges().subscribe(data => {
        console.log('data: ', data);
        this.menu = data;
        console.log('this.menu: ', this.menu);
      });
    });

    setTimeout(() => {
      this.f.setValue(this.menu);
    });
  }

  onSubmit(form: NgForm){
    console.log('Form: ', form);

    
  }

}
