import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WgoalsPageRoutingModule } from './wgoals-routing.module';

import { WgoalsPage } from './wgoals.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    WgoalsPageRoutingModule
  ],
  declarations: [WgoalsPage]
})
export class WgoalsPageModule {}
