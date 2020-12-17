import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTriviaPageRoutingModule } from './add-trivia-routing.module';

import { AddTriviaPage } from './add-trivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTriviaPageRoutingModule
  ],
  declarations: [AddTriviaPage]
})
export class AddTriviaPageModule {}
