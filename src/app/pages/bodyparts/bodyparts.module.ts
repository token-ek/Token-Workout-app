import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodypartsPageRoutingModule } from './bodyparts-routing.module';

import { BodypartsPage } from './bodyparts.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    BodypartsPageRoutingModule
  ],
  declarations: [BodypartsPage]
})
export class BodypartsPageModule {}
