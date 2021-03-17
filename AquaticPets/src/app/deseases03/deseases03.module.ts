import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Deseases03PageRoutingModule } from './deseases03-routing.module';

import { Deseases03Page } from './deseases03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Deseases03PageRoutingModule
  ],
  declarations: [Deseases03Page]
})
export class Deseases03PageModule {}
