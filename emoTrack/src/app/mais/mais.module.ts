import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaisPage } from './mais.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MaisPageRoutingModule } from './mais-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MaisPageRoutingModule
  ],
  declarations: [MaisPage]
})
export class MaisPageModule {}
