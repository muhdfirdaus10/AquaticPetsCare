import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Deseases05Page } from './deseases05.page';

const routes: Routes = [
  {
    path: '',
    component: Deseases05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Deseases05PageRoutingModule {}
