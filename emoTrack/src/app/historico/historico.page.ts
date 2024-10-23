import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  historico: any[] = [];
  constructor(
    private navCtrl: NavController,
    private dataService: DataService
  ) { }

  async ngOnInit() {
    (await this.dataService.getHistorico()).subscribe(data => {
      this.historico = data;
      console.log(data)
    });
  }

  goBack() {
    this.navCtrl.navigateBack('/tabs/mais');
  }

}
