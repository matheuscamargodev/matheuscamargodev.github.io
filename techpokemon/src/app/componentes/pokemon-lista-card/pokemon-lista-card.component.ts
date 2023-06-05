import { Component, Input } from '@angular/core'; // First, import Input
import {
  adicionarComentario,
  adicionarFavorito,
  removerFavorito,
} from '../../ngrx/pokemon.actions';
import { Store, select } from '@ngrx/store';
import { PokemonState } from '../../ngrx/pokemon.reducer';
import { Observable, map } from 'rxjs';
import {
  selectComentarios,
  selectFavoritos,
} from 'src/app/ngrx/pokemon.selectors';

import { Router } from '@angular/router';

@Component({
  selector: 'pokemon-lista-card',
  templateUrl: './pokemon-lista-card.component.html',
  styleUrls: ['./pokemon-lista-card.component.scss'],
})
export class PokemonListaCardComponent {
  @Input() pokemon: any = {};
  @Input() spriteAnimado: boolean = true;
  comentarios$!: Observable<{ [id: number]: string }>;
  favoritos$!: Observable<{ [id: number]: boolean }>;
  novoComentario: { [id: number]: string } = {};

  constructor(private store: Store<PokemonState>, private router: Router) {}
  ngOnInit() {
    this.comentarios$ = this.store.select(selectComentarios);
    this.favoritos$ = this.store.select(selectFavoritos);
  }

  verificaSprite(pokemon: any) {
    return this.spriteAnimado
      ? 'assets/imgs/pokemons/poke_' + pokemon.id + '.gif'
      : pokemon.sprites.other['official-artwork'].front_default;
  }

  getComentario(id: number) {
    return this.comentarios$.pipe(map((comentario) => comentario[id]));
  }

  removerComentario(event: any, id: number) {
    if (event) {
      this.adicionarComentario(id, '');
    }
  }

  adicionarComentario(pokemonId: number, comentario: string) {
    this.store.dispatch(adicionarComentario({ pokemonId, comentario }));
  }

  abrirDetalhes(id: number) {
    window.open(
      '/pokemon/' + id,
      'popup',
      '"resizable=no, toolbar=no, scrollbars=no, menubar=no, status=no, directories=no, location=no, height=900'
    );
    return false;
  }

  favoritar(pokemonId: number) {
    this.store.dispatch(adicionarFavorito({ pokemonId }));
  }

  desfavoritar(pokemonId: number) {
    this.store.dispatch(removerFavorito({ pokemonId }));
  }

  getFavorito(id: number) {
    return this.favoritos$.pipe(map((favorito) => favorito[id]));
  }
}
