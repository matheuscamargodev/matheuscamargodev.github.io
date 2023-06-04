import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokemonState } from '../ngrx/pokemon.reducer';

export const selectPokemonState = createFeatureSelector<PokemonState>('pokemons');

export const selectFilteredPokemons = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.filteredPokemons
);



export const selectPokemons = createSelector(
  selectPokemonState,
  (state) => state.pokemons
);


export const selectComentarios = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.comentarios
);
