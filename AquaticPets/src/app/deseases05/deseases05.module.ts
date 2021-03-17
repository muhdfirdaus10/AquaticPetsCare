import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Deseases05PageRoutingModule } from './deseases05-routing.module';

import { Deseases05Page } from './deseases05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Deseases05PageRoutingModule
  ],
  declarations: [Deseases05Page]
})
export class Deseases05PageModule {}
