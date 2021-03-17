import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Deseases07PageRoutingModule } from './deseases07-routing.module';

import { Deseases07Page } from './deseases07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Deseases07PageRoutingModule
  ],
  declarations: [Deseases07Page]
})
export class Deseases07PageModule {}
