import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DdetailsPageRoutingModule } from './ddetails-routing.module';

import { DdetailsPage } from './ddetails.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    DdetailsPageRoutingModule
  ],
  declarations: [DdetailsPage]
})
export class DdetailsPageModule {}
