import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Deseases06PageRoutingModule } from './deseases06-routing.module';

import { Deseases06Page } from './deseases06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Deseases06PageRoutingModule
  ],
  declarations: [Deseases06Page]
})
export class Deseases06PageModule {}
