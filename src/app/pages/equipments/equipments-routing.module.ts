import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipmentsPage } from './equipments.page';

const routes: Routes = [
  {
    path: '',
    component: EquipmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipmentsPageRoutingModule {}
