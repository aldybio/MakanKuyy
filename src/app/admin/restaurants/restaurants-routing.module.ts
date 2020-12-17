import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantsPage } from './restaurants.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantsPage
  },
  {
    path: 'add-resto',
    loadChildren: () => import('./add-resto/add-resto.module').then( m => m.AddRestoPageModule)
  },
  {
    path: ':key',
    loadChildren: () => import('./edit-resto/edit-resto.module').then( m => m.EditRestoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantsPageRoutingModule {}
