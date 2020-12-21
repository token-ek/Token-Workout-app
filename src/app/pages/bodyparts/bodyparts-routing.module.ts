import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodypartsPage } from './bodyparts.page';

const routes: Routes = [
  {
    path: '',
    component: BodypartsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodypartsPageRoutingModule {}
