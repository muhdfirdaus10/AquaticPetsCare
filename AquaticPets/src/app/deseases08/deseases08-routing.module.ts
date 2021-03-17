import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Deseases08Page } from './deseases08.page';

const routes: Routes = [
  {
    path: '',
    component: Deseases08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Deseases08PageRoutingModule {}
