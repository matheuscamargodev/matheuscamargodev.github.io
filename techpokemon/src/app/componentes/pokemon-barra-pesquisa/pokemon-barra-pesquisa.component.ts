import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pokemon-barra-pesquisa',
  templateUrl: './pokemon-barra-pesquisa.component.html',
  styleUrls: ['./pokemon-barra-pesquisa.component.scss'],
})
export class PokemonBarraPesquisaComponent {
  campoPesquisa: string = '';
  @Input() loading: boolean = false;
  @Output() limpar = new EventEmitter<any>();
  @Output() pesquisar = new EventEmitter<string>();

  pesquisarCampos() {
    this.pesquisar.emit(this.campoPesquisa);
  }

  limparCampo() {
    this.limpar.emit();
    this.campoPesquisa = '';
  }
}
