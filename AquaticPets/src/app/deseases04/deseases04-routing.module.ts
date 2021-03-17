import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Deseases04Page } from './deseases04.page';

const routes: Routes = [
  {
    path: '',
    component: Deseases04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Deseases04PageRoutingModule {}
