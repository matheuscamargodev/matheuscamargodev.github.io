import { createAction, props } from '@ngrx/store';
import { Pokemon } from './pokemon.model';
import { ParamsConsulta, ParamsPesquisaPokemon } from './pokemon.model';

export const loadPokemons = createAction(
  '[Pokemon] Load Pokemons',
  props<ParamsConsulta>()
);

export const loadPokemonsSuccess = createAction(
  '[Pokemon] Load Pokemons Success',
  props<{ pokemons: any[] }>()
);

export const loadPokemonsFailure = createAction(
  '[Pokemon] Load Pokemons Failure',
  props<{ error: any }>()
);

export const loadPokemonsPesquisa = createAction(
  '[Pokemon] Load Pesquisa Pokemons',
  props<{ texto: string }>()
);

export const loadPokemonsPesquisaSuccess = createAction(
  '[Pokemon] Load Pesquisa Pokemons Success',
  props<{ filteredPokemons: any[] }>()
);

export const loadPokemonsPesquisaFailure = createAction(
  '[Pokemon] Load Pesquisa Pokemons Failure',
  props<{ error: any }>()
);

export const limparPokemonsFiltrados = createAction(
  '[Pokemons] Limpar Pokemons Filtrados'
);

export const adicionarComentario = createAction(
  '[Pokemon] Adicionar Comentário',
  props<{ pokemonId: number; comentario: string }>()
);

export const adicionarFavorito = createAction(
  '[Pokemon] Adicionar Pokemon Favorito',
  props<{ pokemonId: number }>()
);

export const removerFavorito = createAction(
  '[Pokemon] Remover Pokemon Favorito',
  props<{ pokemonId: number }>()
);
