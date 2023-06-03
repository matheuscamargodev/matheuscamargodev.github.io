import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pokemon-radio-animado',
  templateUrl: './pokemon-radio-animado.component.html',
  styleUrls: ['./pokemon-radio-animado.component.scss'],
})
export class PokemonRadioAnimadoComponent {
  @Output() spriteAnimado = new EventEmitter<boolean>();
  animadoValor: boolean = true;

  setAnimado(valor:any) {
    
    this.spriteAnimado.emit(valor);
  }
}
