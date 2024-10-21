import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
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
  },
  {
    path: 'assinatura-premium',
    loadChildren: () => import('./assinatura-premium/assinatura-premium.module').then( m => m.AssinaturaPremiumPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'login-erro',
    loadChildren: () => import('./login-erro/login-erro.module').then( m => m.LoginErroPageModule)
  },
  {
    path: 'pre-cadastro',
    loadChildren: () => import('./pre-cadastro/pre-cadastro.module').then( m => m.PreCadastroPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
