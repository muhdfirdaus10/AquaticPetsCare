import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BettaPageRoutingModule } from './betta-routing.module';

import { BettaPage } from './betta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BettaPageRoutingModule
  ],
  declarations: [BettaPage]
})
export class BettaPageModule {}
