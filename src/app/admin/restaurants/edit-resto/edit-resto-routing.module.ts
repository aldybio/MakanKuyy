import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditRestoPage } from './edit-resto.page';

const routes: Routes = [
  {
    path: '',
    component: EditRestoPage
  },
  {
    path: 'add-menu',
    loadChildren: () => import('./add-menu/add-menu.module').then( m => m.AddMenuPageModule)
  },
  {
    path: 'edit-menu',
    loadChildren: () => import('./edit-menu/edit-menu.module').then( m => m.EditMenuPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditRestoPageRoutingModule {}
