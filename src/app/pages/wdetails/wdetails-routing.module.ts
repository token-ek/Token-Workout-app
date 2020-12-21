import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WdetailsPage } from './wdetails.page';

const routes: Routes = [
  {
    path: '',
    component: WdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WdetailsPageRoutingModule {}
