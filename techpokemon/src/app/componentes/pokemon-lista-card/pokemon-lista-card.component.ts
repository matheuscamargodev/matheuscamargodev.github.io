import { Component, Input } from '@angular/core'; // First, import Input
import { adicionarComentario } from '../../ngrx/pokemon.actions';
import { Store, select } from '@ngrx/store';
import { PokemonState } from '../../ngrx/pokemon.reducer';
import { Observable, map } from 'rxjs';
import { selectComentarios } from 'src/app/ngrx/pokemon.selectors';
import { Pokemon } from 'src/app/ngrx/pokemon.model';

@Component({
  selector: 'pokemon-lista-card',
  templateUrl: './pokemon-lista-card.component.html',
  styleUrls: ['./pokemon-lista-card.component.scss'],
})
export class PokemonListaCardComponent {
  @Input() pokemon: any = {};
  @Input() spriteAnimado: boolean = true;
  comentarios$!: Observable<{ [id: number]: string }>;
  novoComentario: { [id: number]: string } = {};

  constructor(private store: Store<PokemonState>) {}
  ngOnInit() {
    this.comentarios$ = this.store.select(selectComentarios);
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
    if(event){
     this.adicionarComentario(id, "")
    }

  }

  adicionarComentario(pokemonId: number, comentario: string) {
    this.store.dispatch(adicionarComentario({ pokemonId, comentario }));
  }
}
