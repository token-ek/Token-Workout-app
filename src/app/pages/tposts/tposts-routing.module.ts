import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TpostsPage } from './tposts.page';

const routes: Routes = [
  {
    path: '',
    component: TpostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TpostsPageRoutingModule {}
