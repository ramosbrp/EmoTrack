import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarrioPage } from './diarrio.page';

const routes: Routes = [
  {
    path: '',
    component: DiarrioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarrioPageRoutingModule {}
