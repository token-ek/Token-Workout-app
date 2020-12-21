import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BmiinfoPage } from './bmiinfo.page';

const routes: Routes = [
  {
    path: '',
    component: BmiinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BmiinfoPageRoutingModule {}
