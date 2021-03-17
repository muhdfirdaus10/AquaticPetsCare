import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MollyPageRoutingModule } from './molly-routing.module';

import { MollyPage } from './molly.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MollyPageRoutingModule
  ],
  declarations: [MollyPage]
})
export class MollyPageModule {}
