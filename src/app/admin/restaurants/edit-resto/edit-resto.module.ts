import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRestoPageRoutingModule } from './edit-resto-routing.module';

import { EditRestoPage } from './edit-resto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditRestoPageRoutingModule
  ],
  declarations: [EditRestoPage]
})
export class EditRestoPageModule {}
