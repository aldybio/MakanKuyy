import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { RestaurantService } from '../../../services/restaurant.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-resto',
  templateUrl: './edit-resto.page.html',
  styleUrls: ['./edit-resto.page.scss'],
})
export class EditRestoPage implements OnInit {
  loadedResto: any;
  key: string;

  @ViewChild('f', null) f: NgForm;

  constructor(
    private activatedRoute: ActivatedRoute,
    private restoService: RestaurantService,
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.activatedRoute.paramMap.subscribe( paramMap => {
      if (!paramMap.has('key')) { return; }
      this.key = paramMap.get('key');

      this.db.object('/restaurant/' + this.key).valueChanges().subscribe(data => {
        console.log('data: ', data);
        this.loadedResto = data;
        console.log('this.loadedResto: ', this.loadedResto);
      });
    });

    setTimeout(() => {
      this.f.setValue(this.loadedResto);
    });
  }

}
