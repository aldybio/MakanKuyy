import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
//import { Restaurant } from './restaurant.model';
import { Restaurant } from '../../restaurant';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
  restos: any;
  constructor(private restoService: RestaurantService) { }

  ngOnInit() {
    this.restoService.getAllResto().snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    ).subscribe(data => {
      this.restos = data;
      console.log('Resto: ', data);
    });
  }

  // ionViewWillEnter() {
  //   this.restos = this.restoService.getAllResto();
  //   console.log('restos: ', this.restos);
  // }



}
