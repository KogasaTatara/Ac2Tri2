import { Component, ElementRef, ViewChild } from '@angular/core';
import { AlertController, RangeCustomEvent } from '@ionic/angular';
import { Animation, createAnimation } from '@ionic/core';
import { Despesas } from '../model/Expences';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  @ViewChild('palhacada', { static: false }) palhacada!: ElementRef<HTMLImageElement>;
  constructor(private alertController: AlertController) { }
  moradia = 0;
  alimentacao = 0;
  transporte = 0;
  lazer = 0;
  numero7 = 0;
  ValorTotal = 0;
  onIonChange(ev: RangeCustomEvent) {
    this.numero7 = parseInt(ev.detail.value.toString())
  }

  ListaDespesas: Despesas[] = [{
    moradia: this.moradia,
    alimentacao: this.alimentacao,
    transporte: this.transporte,
    lazer: this.lazer
  }]

  async Calcular() {

    if (this.palhacada) {
      const animation: Animation = createAnimation()
        .addElement(this.palhacada.nativeElement)
        .duration(1000)
        .fromTo('opacity', '0', '1');
      this.ValorTotal = this.moradia + this.alimentacao + this.transporte + this.lazer;
      animation.play();
      if (this.ValorTotal > this.numero7) {
        const numeroGrande = Math.max(this.moradia, this.alimentacao, this.transporte, this.lazer);
        const alert = await this.alertController.create({
          header: 'Cuidado',
          message: 'Você está gastando mais do que você ganha, reveja seus gastos, tente economizar em: ' + numeroGrande,
          buttons: ['OK']
        });
        await alert.present();

      };
    };
  };
}
