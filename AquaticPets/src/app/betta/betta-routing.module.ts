import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BettaPage } from './betta.page';

const routes: Routes = [
  {
    path: '',
    component: BettaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BettaPageRoutingModule {}
