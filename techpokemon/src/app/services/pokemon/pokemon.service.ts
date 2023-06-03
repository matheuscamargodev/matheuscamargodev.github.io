import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonListaComDetalhes(offset: string, limit: string): Observable<any[]> {
    const pokemonListUrl = `${this.apiUrl}/pokemon?limit=${offset}&offset=${limit}`;
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
}
