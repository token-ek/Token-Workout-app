import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WedayPage } from './weday.page';

const routes: Routes = [
  {
    path: '',
    component: WedayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WedayPageRoutingModule {}
