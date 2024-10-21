import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginErroPage } from './login-erro.page';

const routes: Routes = [
  {
    path: '',
    component: LoginErroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginErroPageRoutingModule {}
