import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Deseases07Page } from './deseases07.page';

const routes: Routes = [
  {
    path: '',
    component: Deseases07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Deseases07PageRoutingModule {}
