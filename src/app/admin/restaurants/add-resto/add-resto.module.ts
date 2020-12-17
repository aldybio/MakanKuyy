import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRestoPageRoutingModule } from './add-resto-routing.module';

import { AddRestoPage } from './add-resto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRestoPageRoutingModule
  ],
  declarations: [AddRestoPage]
})
export class AddRestoPageModule {}
