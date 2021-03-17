import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Deseases01PageRoutingModule } from './deseases01-routing.module';

import { Deseases01Page } from './deseases01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Deseases01PageRoutingModule
  ],
  declarations: [Deseases01Page]
})
export class Deseases01PageModule {}
