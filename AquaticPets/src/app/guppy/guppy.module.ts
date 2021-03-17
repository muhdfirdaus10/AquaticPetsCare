import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuppyPageRoutingModule } from './guppy-routing.module';

import { GuppyPage } from './guppy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuppyPageRoutingModule
  ],
  declarations: [GuppyPage]
})
export class GuppyPageModule {}
