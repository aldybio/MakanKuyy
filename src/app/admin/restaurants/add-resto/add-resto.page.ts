import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../../../services/restaurant.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.page.html',
  styleUrls: ['./add-resto.page.scss'],
})
export class AddRestoPage implements OnInit {

  constructor(
    private router: Router,
    private restoService: RestaurantService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log('Form: ', form);

    this.restoService.addResto(form.value).then(res => {
      console.log('Result: ', res);
      this.router.navigateByUrl('/admin/restaurants');
    }).catch(error => console.log('Error: ', error));

    form.reset();
    this.router.navigateByUrl('/admin/restaurants');
  }

}
