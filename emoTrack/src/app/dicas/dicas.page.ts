import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dicas',
  templateUrl: './dicas.page.html',
  styleUrls: ['./dicas.page.scss'],
})
export class DicasPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.navigateBack('/tabs/mais');
  }

}
