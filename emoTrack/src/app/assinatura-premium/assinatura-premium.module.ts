import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssinaturaPremiumPageRoutingModule } from './assinatura-premium-routing.module';

import { AssinaturaPremiumPage } from './assinatura-premium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssinaturaPremiumPageRoutingModule
  ],
  declarations: [AssinaturaPremiumPage]
})
export class AssinaturaPremiumPageModule {}
