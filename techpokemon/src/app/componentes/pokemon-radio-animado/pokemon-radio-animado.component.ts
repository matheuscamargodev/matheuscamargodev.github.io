import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'pokemon-radio-animado',
  templateUrl: './pokemon-radio-animado.component.html',
  styleUrls: ['./pokemon-radio-animado.component.scss'],
})
export class PokemonRadioAnimadoComponent {
  @Output() spriteAnimado = new EventEmitter<boolean>();
  @Output() favoritos = new EventEmitter<boolean>();
  animadoValor: boolean = true;
  apenasFavoritos: boolean = false;
  color: ThemePalette = 'primary';
  setAnimado(valor: any) {
    this.spriteAnimado.emit(valor);
  }

  mudarFavoritos() {
    this.favoritos.emit(this.apenasFavoritos);
  }
}
