import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WgoalsPage } from './wgoals.page';

const routes: Routes = [
  {
    path: '',
    component: WgoalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WgoalsPageRoutingModule {}
