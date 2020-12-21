import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietsPage } from './diets.page';

const routes: Routes = [
  {
    path: '',
    component: DietsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietsPageRoutingModule {}
