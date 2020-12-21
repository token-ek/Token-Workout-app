import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TpostsPageRoutingModule } from './tposts-routing.module';

import { TpostsPage } from './tposts.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    TpostsPageRoutingModule
  ],
  declarations: [TpostsPage]
})
export class TpostsPageModule {}
