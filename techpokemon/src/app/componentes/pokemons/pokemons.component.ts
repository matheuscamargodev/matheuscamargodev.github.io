import { Component } from '@angular/core';
import {
  adicionarComentario,
  loadPokemons,
  adicionarFavorito,
  removerFavorito,
} from '../../ngrx/pokemon.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ParamsConsulta, Pokemon } from '../../ngrx/pokemon.model';
import { PokemonState } from '../../ngrx/pokemon.reducer';
import { selectComentarios, selectFavoritos } from '../../ngrx/pokemon.selectors';
import { CONSTANTES } from '../../utils/constantes';
import { PokemonService } from '../../services/pokemon/pokemon.service';

@Component({
  selector: 'pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {
  pokemons$: Observable<Pokemon[]> = new Observable<Pokemon[]>();
  constructor(
    private pokemonService: PokemonService,
    private store: Store<PokemonState>
  ) {}
  carregaPokemonsDetalhes(dados: ParamsConsulta): void {
    this.store.dispatch(loadPokemons(dados));
    this.pokemons$ = this.store.select((state) => state.pokemons);
    this.recuperaInformacoes();
  }

  ngOnInit() {
    this.carregaPokemonsDetalhes({ offset: CONSTANTES.offset, limit: CONSTANTES.limit });

    window.addEventListener('beforeunload', () => {
      this.store.pipe(select(selectComentarios)).subscribe((comentarios) => {
        localStorage.setItem('comentarios', JSON.stringify(comentarios));
      });
      this.store.pipe(select(selectFavoritos)).subscribe((favoritos) => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
      });
    });
  }



  recuperaInformacoes() {
    this.pokemonService.getInformacoesSalvas();
  }

}
