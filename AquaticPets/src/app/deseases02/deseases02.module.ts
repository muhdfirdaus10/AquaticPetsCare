import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Deseases02PageRoutingModule } from './deseases02-routing.module';

import { Deseases02Page } from './deseases02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Deseases02PageRoutingModule
  ],
  declarations: [Deseases02Page]
})
export class Deseases02PageModule {}
