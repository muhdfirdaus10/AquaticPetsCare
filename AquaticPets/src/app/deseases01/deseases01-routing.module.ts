import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Deseases01Page } from './deseases01.page';

const routes: Routes = [
  {
    path: '',
    component: Deseases01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Deseases01PageRoutingModule {}
