import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WlevelsPage } from './wlevels.page';

const routes: Routes = [
  {
    path: '',
    component: WlevelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WlevelsPageRoutingModule {}
