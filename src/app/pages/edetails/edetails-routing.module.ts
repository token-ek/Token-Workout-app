import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdetailsPage } from './edetails.page';

const routes: Routes = [
  {
    path: '',
    component: EdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdetailsPageRoutingModule {}
