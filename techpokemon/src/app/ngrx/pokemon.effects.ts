import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PokemonService } from '../services/pokemon/pokemon.service';
import { loadPokemons, loadPokemonsSuccess, loadPokemonsFailure, loadPokemonsPesquisa, loadPokemonsPesquisaSuccess, loadPokemonsPesquisaFailure, limparPokemonsFiltrados } from './pokemon.actions';
import { AlertService } from '../services/alert/alert.service';
import { Store } from '@ngrx/store';

@Injectable()
export class PokemonEffects {
  loadPokemons$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadPokemons),
    switchMap((params) =>
      this.pokemonService.getPokemonListaComDetalhes(params).pipe(
        map(response => response),
        map(pokemons => loadPokemonsSuccess({ pokemons })),
        catchError(error => of(loadPokemonsFailure({ error })))
      )
    )
  )
);

loadPokemonsPesquisa$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadPokemonsPesquisa),
    switchMap((params) =>
      this.pokemonService.getPokemonTextoListaComDetalhes(params.texto).pipe(
        map(response => response),
        map(filteredPokemons => loadPokemonsPesquisaSuccess({ filteredPokemons })),
        catchError(error =>{
          this.alert.alertaWarning('Não encontramos um pokemon com esse nome, revise o texto no campo de busca.');
          this.store.dispatch(limparPokemonsFiltrados());
          return of(loadPokemonsPesquisaFailure({ error }));
        }))
      )
    )
  )
;



  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService,
    private alert:AlertService,
    private store: Store
  ) {}
}
