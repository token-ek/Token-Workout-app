import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdietsPage } from './cdiets.page';

const routes: Routes = [
  {
    path: '',
    component: CdietsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdietsPageRoutingModule {}
