import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  cadena1: number;
  cadena2: string;
  cadena3: string;
  private consonantes: string[];

  constructor() {
    this.cadena1 = 0;
    this.cadena2 = '';
    this.cadena3 = '';
    this.consonantes = 'bcdfghjklmnñpqrstvwxyz'.split('');
  }

  eject(cadena: string): void {
    this.cadena1 = this.contarConsonantes(cadena);
    this.cadena2 = this.transformarMayusculas(cadena);
    this.cadena3 = this.soloConsonantes(cadena);
  }

  private contarConsonantes(cadena: string): number {
    let contador = 0;

    cadena.split('').forEach((letra) => {
      this.consonantes.forEach((consonante) => {
        if (letra === consonante) {
          contador++;
        }
      });
    });

    return contador;
  }

  private transformarMayusculas(cadena: string): string {
    return cadena.toUpperCase();
  }

  private soloConsonantes(cadena: string): string {
    let soloConsonantes = '';

    cadena.split('').forEach((letra) => {
      this.consonantes.forEach((consonante) => {
        if (letra === consonante) {
          soloConsonantes += letra;
        }
      });
    });

    return soloConsonantes;
  }
}
