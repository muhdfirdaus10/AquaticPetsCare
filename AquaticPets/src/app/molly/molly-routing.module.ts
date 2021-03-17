import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MollyPage } from './molly.page';

const routes: Routes = [
  {
    path: '',
    component: MollyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MollyPageRoutingModule {}
