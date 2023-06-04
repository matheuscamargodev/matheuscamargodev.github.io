import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ParamsConsulta } from 'src/app/ngrx/pokemon.model';
import { PokemonState } from '../../ngrx/pokemon.reducer';
import { Store } from '@ngrx/store';
import { adicionarComentario } from '../../ngrx/pokemon.actions';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient, private store: Store<PokemonState>) {}

  getPokemonListaComDetalhes(params: ParamsConsulta): Observable<any> {
    const pokemonListUrl = `${this.apiUrl}/pokemon?limit=${params.limit}&offset=${params.offset}`;
    return this.http.get(pokemonListUrl).pipe(
      map((response: any) => response.results),
      mergeMap((pokemonList: any[]) => {
        const pokemonDetailsRequests = pokemonList.map((pokemon) =>
          this.http.get(pokemon.url)
        );
        return forkJoin(pokemonDetailsRequests);
      })
    );
  }

  getPokemonTextoListaComDetalhes(texto: string): Observable<any> {
    const pokemonListUrl = `${this.apiUrl}/pokemon/${texto}?limit=20`;
    return this.http.get(pokemonListUrl);
  }

  getPokemons(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon`);
  }
}
