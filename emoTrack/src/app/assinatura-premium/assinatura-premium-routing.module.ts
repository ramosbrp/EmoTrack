import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssinaturaPremiumPage } from './assinatura-premium.page';

const routes: Routes = [
  {
    path: '',
    component: AssinaturaPremiumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssinaturaPremiumPageRoutingModule {}
