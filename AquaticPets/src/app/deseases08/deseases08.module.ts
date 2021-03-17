import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Deseases08PageRoutingModule } from './deseases08-routing.module';

import { Deseases08Page } from './deseases08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Deseases08PageRoutingModule
  ],
  declarations: [Deseases08Page]
})
export class Deseases08PageModule {}
