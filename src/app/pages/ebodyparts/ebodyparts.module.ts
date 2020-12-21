import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EbodypartsPageRoutingModule } from './ebodyparts-routing.module';

import { EbodypartsPage } from './ebodyparts.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    EbodypartsPageRoutingModule
  ],
  declarations: [EbodypartsPage]
})
export class EbodypartsPageModule {}
