import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginErroPageRoutingModule } from './login-erro-routing.module';

import { LoginErroPage } from './login-erro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginErroPageRoutingModule
  ],
  declarations: [LoginErroPage]
})
export class LoginErroPageModule {}
