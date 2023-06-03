import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pokemonLista: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.carregaPokemonsDetalhes({ offset: 0, limit: 0});
  }

  carregaPokemonsDetalhes(dados: any): void {
    this.pokemonService
      .getPokemonListaComDetalhes(dados.offset, dados.limit)
      .subscribe(
        (pokemonList: any[]) => {
          this.pokemonLista = pokemonList;
          console.log(this.pokemonLista);
        },
        (error: any) => {
          console.log('Error:', error);
        }
      );
  }
}
