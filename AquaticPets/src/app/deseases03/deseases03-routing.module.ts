import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Deseases03Page } from './deseases03.page';

const routes: Routes = [
  {
    path: '',
    component: Deseases03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Deseases03PageRoutingModule {}
