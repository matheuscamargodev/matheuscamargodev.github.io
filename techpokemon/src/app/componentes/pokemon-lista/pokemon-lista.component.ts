import { Component, Input } from '@angular/core'; // First, import Input
import { AlertService } from 'src/app/services/alert/alert.service';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pokemon-lista',
  templateUrl: './pokemon-lista.component.html',
  styleUrls: ['./pokemon-lista.component.scss'],
})
export class PokemonListaComponent {
  @Input() pokemonLista: any = [];
  @Output() carregaPokemons = new EventEmitter<any>();
  pagina: number = 1;
  offset = 0;
  limit = 0;
  spriteAnimado: boolean = true;
  loading: boolean = false;

  constructor(
    private pokemonService: PokemonService,
    private alert: AlertService
  ) {}
  setSpriteAnimado(event: any) {
    this.spriteAnimado = event;
  }

  carregaTodosPokemons() {
    this.carregaPokemons.emit({ offset: this.offset, limit: this.limit });
  }

  limparCampoPesquisa() {
    this.carregaPokemons.emit({ offset: this.offset, limit: this.limit });
  }

  pesquisarPokemons(texto: string) {
    if (texto.length == 0) return this.carregaTodosPokemons();
    this.loading = true;
    this.pokemonService.getPokemonTextoListaComDetalhes(texto).subscribe(
      (pokemonList) => {
        this.pokemonLista = [];
        this.pokemonLista.push(pokemonList);
        this.loading = false;
      },
      (error: any) => {
        this.alert.alertaWarning(
          'Não encontramos um pokémon com esse nome, por favor revise o texto inserido.'
        );
        this.loading = false;
      }
    );
  }

  previousPage(): void {
    if (this.offset >= this.limit) {
      this.offset -= 20;
      this.limit -= 20;
      this.pagina -= 1;
      this.carregaTodosPokemons();
    }
  }

  nextPage(): void {
    this.offset += 20;
    this.limit += 20;
    this.pagina += 1;
    this.carregaTodosPokemons();
  }
}
