import { Component, OnInit } from '@angular/core';
//import { RestaurantsService } from './restaurants.service';
import { RestaurantService } from '../services/restaurant.service';
//import { Restaurant } from './restaurant.model';
import { Restaurant } from '../restaurant';
import { map } from 'rxjs/operators';
import { pipe, Observable } from 'rxjs';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
  //restaurants: Restaurant[];
  restos: any;
  //constructor(private restaurantsService: RestaurantsService) { }
  constructor(private restoService: RestaurantService) { }

  ngOnInit() {
    this.restoService.getAllResto().snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    ).subscribe(data => {
      this.restos = data;
    });
  }

  ionViewWillEnter() {
    
  }

}
