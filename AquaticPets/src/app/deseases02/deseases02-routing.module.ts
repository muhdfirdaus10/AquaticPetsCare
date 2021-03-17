import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Deseases02Page } from './deseases02.page';

const routes: Routes = [
  {
    path: '',
    component: Deseases02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Deseases02PageRoutingModule {}
