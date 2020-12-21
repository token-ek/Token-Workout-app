import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdetailsPageRoutingModule } from './pdetails-routing.module';

import { PdetailsPage } from './pdetails.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    PdetailsPageRoutingModule
  ],
  declarations: [PdetailsPage]
})
export class PdetailsPageModule {}
