import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Deseases04PageRoutingModule } from './deseases04-routing.module';

import { Deseases04Page } from './deseases04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Deseases04PageRoutingModule
  ],
  declarations: [Deseases04Page]
})
export class Deseases04PageModule {}
