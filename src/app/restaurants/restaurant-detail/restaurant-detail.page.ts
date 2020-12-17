import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Restaurant } from '../restaurant.model';
//import { RestaurantsService } from '../restaurants.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Food } from './restaurant-detail.model';
import { RestaurantDetailService } from './restaurant-detail.service';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.page.html',
  styleUrls: ['./restaurant-detail.page.scss'],
})
export class RestaurantDetailPage implements OnInit {
  //loadedRestaurant: Restaurant;
  loadedResto: any;
  key: string;
  foods: Food[];
  constructor(
    private activatedRoute: ActivatedRoute,
    //private restaurantsService: RestaurantsService,
    private restoService: RestaurantService,
    private restaurantDetailService: RestaurantDetailService,
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe( paramMap => {
    //   if (!paramMap.has('key')) { return; }
    //   const restaurantId = paramMap.get('key');
    //   this.loadedRestaurant = this.restaurantsService.getRestaurant(restaurantId);
    // });
  }

  ionViewWillEnter() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      if (!paramMap.has('key')) { return; }
      this.key = paramMap.get('key');

      this.db.object('/restaurant/' + this.key).valueChanges().subscribe(data => {
        console.log('data: ', data);
        this.loadedResto = data;
        console.log('this.loadedResto: ', this.loadedResto);
      });
    });
    this.foods = this.restaurantDetailService.getAllFoods();
  }

}
