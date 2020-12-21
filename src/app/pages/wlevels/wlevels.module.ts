import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WlevelsPageRoutingModule } from './wlevels-routing.module';

import { WlevelsPage } from './wlevels.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    WlevelsPageRoutingModule
  ],
  declarations: [WlevelsPage]
})
export class WlevelsPageModule {}
