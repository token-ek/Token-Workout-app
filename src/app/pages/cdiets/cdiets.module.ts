import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CdietsPageRoutingModule } from './cdiets-routing.module';

import { CdietsPage } from './cdiets.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    CdietsPageRoutingModule
  ],
  declarations: [CdietsPage]
})
export class CdietsPageModule {}
