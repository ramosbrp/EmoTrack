import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-assinatura-premium',
  templateUrl: './assinatura-premium.page.html',
  styleUrls: ['./assinatura-premium.page.scss'],
})
export class AssinaturaPremiumPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.navigateBack('/tabs/menu');
  }
}
