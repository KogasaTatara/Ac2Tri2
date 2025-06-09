import { Component, ElementRef, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Animation, createAnimation } from '@ionic/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  @ViewChild('palhacada', { static: false }) palhacada!: ElementRef<HTMLImageElement>;
  constructor(private alertController: AlertController) { }

  invest = 0;
  TdJ = 0;
  anos = 0;
  n = 1;
  ValorFinal = 0;
  ValorJuros = 0;

  async Calcular() {
    if (this.palhacada) {
      const animation: Animation = createAnimation()
        .addElement(this.palhacada.nativeElement)
        .duration(1000)
        .fromTo('opacity', '0', '1');
      if ((this.TdJ / 100) < 0.15) {
        this.ValorFinal = (this.invest * (1 + (this.TdJ / 100) / this.n) ** (this.n * this.anos));
        animation.play();
      } else {
        this.ValorFinal = (this.invest * (1 + (this.TdJ / 100) / this.n) ** (this.n * this.anos));
        const alert = await this.alertController.create({
          header: 'Cuidado',
          message: 'Esse investimento pode ser perigoso, tá bom de mais pra não ser esquema',
          buttons: ['OK']
        });
        await alert.present();
        animation.play();
      };
      this.ValorJuros = this.ValorFinal - this.invest;
    };
  };
}
