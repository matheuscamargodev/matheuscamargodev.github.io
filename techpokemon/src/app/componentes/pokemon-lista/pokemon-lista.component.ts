import { Component, Input } from '@angular/core'; // First, import Input
import { AlertService } from 'src/app/services/alert/alert.service';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../../ngrx/pokemon.model';
import {
  loadPokemonsPesquisa,
  limparPokemonsFiltrados,
} from 'src/app/ngrx/pokemon.actions';
import { Store } from '@ngrx/store';
import { PokemonState } from '../../ngrx/pokemon.reducer';
import { selectFilteredPokemons, selectPokemonFavoritos } from '../../ngrx/pokemon.selectors';

import { defaultIfEmpty, every } from 'rxjs/operators';
import { CONSTANTES } from 'src/app/utils/constantes';

@Component({
  selector: 'pokemon-lista',
  templateUrl: './pokemon-lista.component.html',
  styleUrls: ['./pokemon-lista.component.scss'],
})
export class PokemonListaComponent {
  @Input() pokemonLista$!: Observable<any>;

  @Output() carregaPokemons = new EventEmitter<any>();

  pagina: number = 1;
  offset = 0;
  limit = 0;
  spriteAnimado: boolean = true;
  loading: boolean = false;
  pokelista$: Observable<Pokemon[]> = new Observable<Pokemon[]>();
  pokemonFiltrado$: Observable<Pokemon[]> = new Observable<Pokemon[]>();
  pokemonFavoritos$: Observable<Pokemon[]> = new Observable<Pokemon[]>();
  apenasFavoritados: boolean = false;
  constructor(
    private pokemonService: PokemonService,
    private alert: AlertService,
    private store: Store<PokemonState>
  ) {}
  setSpriteAnimado(event: any) {
    this.spriteAnimado = event;
  }

  ngOnInit() {
    this.pokemonLista$.subscribe(
      (pokemonLista: any) => (this.pokelista$ = this.pokelista$)
    );
  }

  carregaTodosPokemons() {
    this.carregaPokemons.emit({ offset: this.offset, limit: this.limit });
  }

  limparCampoPesquisa() {
    this.pokemonFiltrado$ = new Observable<Pokemon[]>();
    this.carregaPokemons.emit({ offset: this.offset, limit: this.limit });
    this.store.dispatch(limparPokemonsFiltrados());
  }

  apenasFavoritos(favoritos:any){
    this.apenasFavoritados = favoritos;
    if(favoritos){
      this.pokemonFavoritos$ = this.store.select(selectPokemonFavoritos);
      this.pokemonFavoritos$.subscribe(
        (pokemonLista: any) => (console.log(pokemonLista))
      );
    }else{
      this.carregaTodosPokemons();
    }
  }

  pesquisarPokemons(texto: string) {
    if (texto.length == CONSTANTES.is_empty) return this.carregaTodosPokemons();
    this.store.dispatch(loadPokemonsPesquisa({ texto: texto }));
    this.pokemonFiltrado$ = this.store.select(selectFilteredPokemons);
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
