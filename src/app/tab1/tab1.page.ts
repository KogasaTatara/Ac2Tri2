import { Component, ElementRef, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Animation, createAnimation } from '@ionic/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  @ViewChild('palhacada', { static: false }) palhacada!: ElementRef<HTMLImageElement>;

  constructor(private alertController: AlertController) { }
  emprestimo = 0;
  juros = 0;
  messes = 0;
  ValorParcela = 0;


  async Calcular() {
    if (this.palhacada) {
      const animation: Animation = createAnimation()
        .addElement(this.palhacada.nativeElement)
        .duration(1000)
        .fromTo('opacity', '0', '1');
      if ((this.juros / 100) < 0.20) {
        this.ValorParcela = (this.emprestimo * (this.juros / 100)) / (1 - (1 + (this.juros / 100)) ** (-this.messes));
        animation.play();
      } else {
        this.ValorParcela = (this.emprestimo * (this.juros / 100)) / (1 - (1 + (this.juros / 100)) ** (-this.messes));
        const alert = await this.alertController.create({
          header: 'Cuidado',
          message: `Esse empréstimo pode ser arriscado.`,
          buttons: ['OK']
        });
        await alert.present();
        animation.play();
      }
    }
  }
}
