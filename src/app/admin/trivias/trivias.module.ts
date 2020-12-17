import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TriviasPageRoutingModule } from './trivias-routing.module';

import { TriviasPage } from './trivias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TriviasPageRoutingModule
  ],
  declarations: [TriviasPage]
})
export class TriviasPageModule {}
