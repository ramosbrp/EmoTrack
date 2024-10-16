import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'notificacoes',
    loadChildren: () => import('./notificacoes/notificacoes.module').then(m => m.NotificacoesPageModule)
  },
  {
    path: 'dicas',
    loadChildren: () => import('./dicas/dicas.module').then(m => m.DicasPageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./historico/historico.module').then(m => m.HistoricoPageModule)
  },
  {
    path: 'teste-perfil-comportamental',
    loadChildren: () => import('./teste-perfil-comportamental/teste-perfil-comportamental.module').then(m => m.TestePerfilComportamentalPageModule)
  },
  //  {
  //   path: 'diario',
  //   loadChildren: () => import('./diario/diario.module').then(m => m.DiarioPageModule)
  // },
  {
    path: 'historico',
    loadChildren: () => import('./historico/historico.module').then( m => m.HistoricoPageModule)
  },
  {
    path: 'teste-perfil-comportamental',
    loadChildren: () => import('./teste-perfil-comportamental/teste-perfil-comportamental.module').then( m => m.TestePerfilComportamentalPageModule)
  },
  {
    path: 'diarrio',
    loadChildren: () => import('./diarrio/diarrio.module').then( m => m.DiarrioPageModule)
  },  {
    path: 'assinatura-premium',
    loadChildren: () => import('./assinatura-premium/assinatura-premium.module').then( m => m.AssinaturaPremiumPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
