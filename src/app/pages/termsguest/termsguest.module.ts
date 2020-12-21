import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsguestPageRoutingModule } from './termsguest-routing.module';

import { TermsguestPage } from './termsguest.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TermsguestPageRoutingModule
  ],
  declarations: [TermsguestPage]
})
export class TermsguestPageModule {}
