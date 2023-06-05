import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ParamsConsulta } from 'src/app/ngrx/pokemon.model';
import { PokemonState } from '../../ngrx/pokemon.reducer';
import { Store } from '@ngrx/store';
import { adicionarComentario, adicionarFavorito, removerFavorito } from '../../ngrx/pokemon.actions';

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

  getPokemonDetalhe(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon/${id}`);
  }

  getInformacoesSalvas(): void{
    let comentarios: any = localStorage.getItem('comentarios');
    comentarios = Object.entries(JSON.parse(comentarios));

    let favoritos: any = localStorage.getItem('favoritos');
    favoritos = Object.entries(JSON.parse(favoritos));

    if (favoritos) {
      for (let favorito of favoritos) {
        const pokeid: number = favorito[0];
        if (favorito[1]) {
          this.store.dispatch(adicionarFavorito({ pokemonId: pokeid }));
        } else if (!favorito[1])
          this.store.dispatch(removerFavorito({ pokemonId: pokeid }));
      }
    }

    if (comentarios) {
      for (let comentario of comentarios) {
        this.store.dispatch(
          adicionarComentario({
            pokemonId: comentario[0],
            comentario: comentario[1],
          })
        );
      }
    }
  }
}
