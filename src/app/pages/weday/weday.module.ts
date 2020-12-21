import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WedayPageRoutingModule } from './weday-routing.module';

import { WedayPage } from './weday.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    WedayPageRoutingModule
  ],
  declarations: [WedayPage]
})
export class WedayPageModule {}
