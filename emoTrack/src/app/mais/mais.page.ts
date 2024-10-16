import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab-mais',
  templateUrl: 'mais.page.html',
  styleUrls: ['mais.page.scss']
})
export class MaisPage {

  constructor(private navCtrl: NavController) { }


  ngOnInit() {
  }

  navigateToDicas() {
    this.navCtrl.navigateForward('/dicas');
  }

  navigateToHistorico() {
    this.navCtrl.navigateForward('/historico');
  }

  navigateToPerfil() {
    this.navCtrl.navigateForward('/teste-perfil-comportamental');
  }

  navigateToDiario() {
    this.navCtrl.navigateForward('/diario');
  }

  getImageUrl(imageName: string): string {
    console.log(`${window.location.origin}/assets/imagens/${imageName}`)
    return `${window.location.origin}/assets/imagens/${imageName}`;
  }


}
