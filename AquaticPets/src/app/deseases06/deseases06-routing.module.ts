import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Deseases06Page } from './deseases06.page';

const routes: Routes = [
  {
    path: '',
    component: Deseases06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Deseases06PageRoutingModule {}
