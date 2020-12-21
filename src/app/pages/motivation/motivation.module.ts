import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotivationPageRoutingModule } from './motivation-routing.module';

import { MotivationPage } from './motivation.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    MotivationPageRoutingModule
  ],
  declarations: [MotivationPage]
})
export class MotivationPageModule {}
