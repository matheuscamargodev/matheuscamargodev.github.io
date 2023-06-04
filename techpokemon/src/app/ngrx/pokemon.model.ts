export interface Pokemon {
  error: string,
  loading: boolean,
  pokemons: any[];
  filteredPokemons:any;

}

export interface PokemonS {
  types: string[],
  name: string
}

export interface ParamsConsulta {
  offset: string;
  limit: string;
}


export interface ParamsPesquisaPokemon {
  textoPesquisa: string;
}

