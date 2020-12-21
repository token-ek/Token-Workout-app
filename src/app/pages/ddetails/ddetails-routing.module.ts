import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DdetailsPage } from './ddetails.page';

const routes: Routes = [
  {
    path: '',
    component: DdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DdetailsPageRoutingModule {}
