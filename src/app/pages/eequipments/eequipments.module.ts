import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EequipmentsPageRoutingModule } from './eequipments-routing.module';

import { EequipmentsPage } from './eequipments.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    EequipmentsPageRoutingModule
  ],
  declarations: [EequipmentsPage]
})
export class EequipmentsPageModule {}
