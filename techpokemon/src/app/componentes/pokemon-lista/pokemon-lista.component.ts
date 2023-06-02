import { Component, Input } from '@angular/core'; // First, import Input

@Component({
  selector: 'app-pokemon-lista',
  templateUrl: './pokemon-lista.component.html',
  styleUrls: ['./pokemon-lista.component.scss'],
})
export class PokemonListaComponent {
  @Input() pokemonLista: any = [];
  spriteAnimado: boolean = true;
  mudarSprite() {
    console.log('dale');
  }

  verificaSprite(pokemon:any) {
    
    return this.spriteAnimado
      ? 'assets/imgs/pokemons/poke_' + pokemon.id + '.gif'
      : pokemon.sprites.other['official-artwork'].front_default;
  }
}
