import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(private alertController: AlertController) {}
invest = 0;
TdJ = 0;
anos = 0;
n=1;
ValorFinal = 0;
ValorJuros = 0;

async Calcular() {
  if ((this.TdJ/100) < 0.15) {
    this.ValorFinal = (this.invest * (1+(this.TdJ/100)/this.n) ** (this.n * this.anos));
  } else {
    this.ValorFinal = (this.invest * (1+(this.TdJ/100)/this.n) ** (this.n * this.anos));
    const alert = await this.alertController.create({
      header: 'Cuidado',
      message: 'Esse investimento pode ser perigoso, tá bom de mais pra não ser esquema',
      buttons: ['OK']
    });
    await alert.present();
  };
  this.ValorJuros = this.ValorFinal - this.invest;
};
};