import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelsPageRoutingModule } from './levels-routing.module';

import { LevelsPage } from './levels.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    LevelsPageRoutingModule
  ],
  declarations: [LevelsPage]
})
export class LevelsPageModule {}
