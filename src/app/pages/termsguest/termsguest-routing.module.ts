import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsguestPage } from './termsguest.page';

const routes: Routes = [
  {
    path: '',
    component: TermsguestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsguestPageRoutingModule {}
