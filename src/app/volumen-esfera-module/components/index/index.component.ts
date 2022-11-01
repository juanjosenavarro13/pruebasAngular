import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  resultado: number = 0;

  calcular(h: string, r: string) {
    const altura = Number(h);
    const radio = Number(r);

    if (this.comprobarDatos(altura, radio)) {
      this.resultado = Number(
        (Math.PI * altura * Math.pow(radio, 2)).toFixed(3)
      );
    }
  }

  comprobarDatos(h: number, r: number): boolean {
    return !isNaN(h) && !isNaN(r);
  }
}
