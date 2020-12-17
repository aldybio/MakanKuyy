import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TriviasPage } from './trivias.page';

const routes: Routes = [
  {
    path: '',
    component: TriviasPage
  },
  {
    path: 'add-trivia',
    loadChildren: () => import('./add-trivia/add-trivia.module').then( m => m.AddTriviaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TriviasPageRoutingModule {}
