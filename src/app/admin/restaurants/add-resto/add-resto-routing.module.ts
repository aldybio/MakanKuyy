import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRestoPage } from './add-resto.page';

const routes: Routes = [
  {
    path: '',
    component: AddRestoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRestoPageRoutingModule {}
