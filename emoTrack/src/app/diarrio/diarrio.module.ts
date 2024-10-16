import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarrioPageRoutingModule } from './diarrio-routing.module';

import { DiarrioPage } from './diarrio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiarrioPageRoutingModule
  ],
  declarations: [DiarrioPage]
})
export class DiarrioPageModule {}
