import { createReducer, on } from '@ngrx/store';
import {
  loadPokemons,
  loadPokemonsSuccess,
  limparPokemonsFiltrados,
  loadPokemonsFailure,
  loadPokemonsPesquisa,
  loadPokemonsPesquisaSuccess,
  loadPokemonsPesquisaFailure,
  adicionarComentario,
  adicionarFavorito,
  removerFavorito
} from './pokemon.actions';
import { Pokemon } from './pokemon.model';

export interface PokemonState {
  pokemons: Pokemon[];
  filteredPokemons: any[];
  comentarios: { [pokemonId: number]: string };
  favoritos: {[pokemonId: number]: boolean};
  loading: boolean;
  error: any;
}

export const initialState: PokemonState = {
  pokemons: [],
  filteredPokemons: [],
  comentarios: {},
  favoritos: [],
  loading: false,
  error: null,
};

export const pokemonReducer = createReducer(
  initialState,
  on(loadPokemons, (state) => ({ ...state, loading: true })),
  on(loadPokemonsSuccess, (state, { pokemons }) => {
    return { ...state, pokemons };
  }),
  on(loadPokemonsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(loadPokemonsPesquisa, (state) => ({ ...state, loading: true })),
  on(loadPokemonsPesquisaSuccess, (state, { filteredPokemons }) => ({
    ...state,
    filteredPokemons: [filteredPokemons],
  })),
  on(loadPokemonsPesquisaFailure, (state, { error }) => ({ ...state, error })),
  on(limparPokemonsFiltrados, (state) => ({ ...state, filteredPokemons: [] })),

  on(adicionarComentario, (state, { pokemonId, comentario }) => ({
    ...state,
    comentarios: {
      ...state.comentarios,
      [pokemonId]: comentario,
    },
  })),
  on(adicionarFavorito, (state, { pokemonId }) => ({
    ...state,
    favoritos: {
      ...state.favoritos,
      [pokemonId]: true,
    },
  })),
  on(removerFavorito, (state, { pokemonId }) => ({
    ...state,
    favoritos: {
      ...state.favoritos,
      [pokemonId]: false,
    },
  }))
);
