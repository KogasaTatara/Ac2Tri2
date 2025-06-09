import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RangeCustomEvent } from '@ionic/angular';
import { Despesas } from '../model/Expences';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

constructor(private alertController: AlertController) {}
moradia = 0;
alimentacao = 0;
transporte = 0;
lazer = 0;
numero7 = 0;
ValorTotal = 0;
onIonChange(ev:RangeCustomEvent) {
  this.numero7=parseInt(ev.detail.value.toString())
}

ListaDespesas: Despesas[] = [{
  moradia: this.moradia,
  alimentacao: this.alimentacao,
  transporte: this.transporte,
  lazer: this.lazer
}]

async Calcular() {
  this.ValorTotal = this.moradia + this.alimentacao + this.transporte + this.lazer;
  if (this.ValorTotal > this.numero7) {
    const alert = await this.alertController.create({
      header: 'Cuidado',
      message: 'Você está gastando mais do que você ganha, reveja seus gastos',
      buttons: ['OK']
    });
    await alert.present();
  };
};
};
