import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuppyPage } from './guppy.page';

const routes: Routes = [
  {
    path: '',
    component: GuppyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuppyPageRoutingModule {}
