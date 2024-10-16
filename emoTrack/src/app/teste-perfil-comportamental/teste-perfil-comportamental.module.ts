import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestePerfilComportamentalPageRoutingModule } from './teste-perfil-comportamental-routing.module';

import { TestePerfilComportamentalPage } from './teste-perfil-comportamental.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestePerfilComportamentalPageRoutingModule
  ],
  declarations: [TestePerfilComportamentalPage]
})
export class TestePerfilComportamentalPageModule {}
