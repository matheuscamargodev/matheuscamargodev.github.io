import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokemonState } from '../ngrx/pokemon.reducer';
import { Pokemon } from './pokemon.model';
import { state } from '@angular/animations';
export const selectPokemonState =
  createFeatureSelector<PokemonState>('pokemons');

export const selectFilteredPokemons = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.filteredPokemons
);

export const selectPokemonFavoritos = createSelector(
  selectPokemonState,
  (state: any) => {
    const favoritos = Object.entries(state.favoritos)
      .filter(([_, isFavorite]) => isFavorite === true)
      .map(([pokemonId]) => Number(pokemonId));

    console.log(favoritos);

    const pokemons = state.pokemons;
    let newArrPokemons = [];
    for (let pokemon of pokemons) {
      if (favoritos.includes(pokemon.id)) newArrPokemons.push(pokemon);
    }

    return newArrPokemons;
  }
);

export const selectPokemons = createSelector(
  selectPokemonState,
  (state) => state.pokemons
);

export const selectComentarios = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.comentarios
);

export const selectFavoritos = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.favoritos
);
