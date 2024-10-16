import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})
export class MenuPage {

  constructor(private navCtrl: NavController) { }

  navigateToNotifications() {
    this.navCtrl.navigateForward('/notificacoes');
  }

  navigateToAssinatura() {
    this.navCtrl.navigateForward('/assinatura-premium');
  }
}
