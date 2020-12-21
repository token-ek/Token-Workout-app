import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdetailsPageRoutingModule } from './edetails-routing.module';

import { EdetailsPage } from './edetails.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    EdetailsPageRoutingModule
  ],
  declarations: [EdetailsPage]
})
export class EdetailsPageModule {}
