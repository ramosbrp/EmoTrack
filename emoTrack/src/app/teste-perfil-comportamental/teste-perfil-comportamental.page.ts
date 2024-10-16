import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-teste-perfil-comportamental',
  templateUrl: './teste-perfil-comportamental.page.html',
  styleUrls: ['./teste-perfil-comportamental.page.scss'],
})
export class TestePerfilComportamentalPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.navigateBack('/tabs/mais');
  }

}
