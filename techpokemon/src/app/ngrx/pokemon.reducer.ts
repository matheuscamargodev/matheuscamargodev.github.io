import { createReducer, on } from '@ngrx/store';
import {
  loadPokemons,
  loadPokemonsSuccess,
  limparPokemonsFiltrados,
  loadPokemonsFailure,
  loadPokemonsPesquisa,
  loadPokemonsPesquisaSuccess,
  loadPokemonsPesquisaFailure,
  adicionarComentario
} from './pokemon.actions';
import { Pokemon } from './pokemon.model';

export interface PokemonState {
  pokemons: Pokemon[];
  filteredPokemons: any[];
  comentarios: { [pokemonId: number]: string };
  loading: boolean;
  error: any;
}

export const initialState: PokemonState = {
  pokemons: [],
  filteredPokemons: [],
  comentarios: {},
  loading: false,
  error: null,
};

export const pokemonReducer = createReducer(
  initialState,
  on(loadPokemons, (state) => ({ ...state, loading: true })),
  on(loadPokemonsSuccess, (state, { pokemons }) => {
    // Manter os comentários salvos mesmo após a atualização do estado

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
      [pokemonId]: comentario
    }
  }))





);
