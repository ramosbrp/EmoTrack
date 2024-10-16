import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestePerfilComportamentalPage } from './teste-perfil-comportamental.page';

const routes: Routes = [
  {
    path: '',
    component: TestePerfilComportamentalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestePerfilComportamentalPageRoutingModule {}
