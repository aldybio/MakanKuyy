import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTriviaPage } from './add-trivia.page';

const routes: Routes = [
  {
    path: '',
    component: AddTriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTriviaPageRoutingModule {}
