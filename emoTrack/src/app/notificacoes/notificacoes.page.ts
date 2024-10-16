import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.page.html',
  styleUrls: ['./notificacoes.page.scss'],
})
export class NotificacoesPage {
  notifications = [
    { text: 'Você tem uma nova mensagem', date: '12/10/2024' },
    { text: 'Atualização disponível para o seu plano', date: '10/10/2024' },
    { text: 'Não esqueça de concluir sua meta diária!', date: '09/10/2024' }
  ];

  constructor(private navCtrl: NavController) { }

  goBack() {
    this.navCtrl.navigateBack('/tabs/menu');
  }
}
