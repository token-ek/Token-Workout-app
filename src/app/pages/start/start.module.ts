import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartPageRoutingModule } from './start-routing.module';

import { StartPage } from './start.page';
import { LoginPageModule } from '../login/login.module';
import { ComponentsModule } from '../../components/components.module';
import { SignupPageModule } from '../signup/signup.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartPageRoutingModule,
    ComponentsModule,
    LoginPageModule,
    SignupPageModule
  ],
  declarations: [StartPage]
})
export class StartPageModule {}
