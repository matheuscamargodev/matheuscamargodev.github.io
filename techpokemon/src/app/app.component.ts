import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon/pokemon.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { adicionarComentario, loadPokemons } from './ngrx/pokemon.actions';
import { ParamsConsulta, Pokemon } from './ngrx/pokemon.model';
import { PokemonState } from './ngrx/pokemon.reducer';
import { selectComentarios } from './ngrx/pokemon.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pokemons$: Observable<Pokemon[]> = new Observable<Pokemon[]>();

  constructor(
    private pokemonService: PokemonService,
    private store: Store<PokemonState>
  ) {}

  ngOnInit() {
    this.carregaPokemonsDetalhes({ offset: '0', limit: '2' });

    window.addEventListener('beforeunload', () => {
      this.store.pipe(select(selectComentarios)).subscribe((comentarios) => {
        localStorage.setItem('comentarios', JSON.stringify(comentarios));
      });
    });
  }

  carregaPokemonsDetalhes(dados: ParamsConsulta): void {
    this.store.dispatch(loadPokemons(dados));
    this.pokemons$ = this.store.select((state) => state.pokemons);
    let comentarios: any = localStorage.getItem('comentarios');
    comentarios = Object.entries(JSON.parse(comentarios));
    if (comentarios) {
      for (let comentario of comentarios) {
        console.log(comentario[0]);
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
