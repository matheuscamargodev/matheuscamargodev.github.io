import { Component, Input } from '@angular/core'; // First, import Input

@Component({
  selector: 'pokemon-lista-card',
  templateUrl: './pokemon-lista-card.component.html',
  styleUrls: ['./pokemon-lista-card.component.scss'],
})
export class PokemonListaCardComponent {
  @Input() pokemon: any = {};
  @Input() spriteAnimado: boolean = true; 

  verificaSprite(pokemon: any) {
    return this.spriteAnimado
      ? 'assets/imgs/pokemons/poke_' + pokemon.id + '.gif'
      : pokemon.sprites.other['official-artwork'].front_default;
  }
}
