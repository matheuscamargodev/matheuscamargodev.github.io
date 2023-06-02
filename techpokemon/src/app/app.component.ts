import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pokemonLista: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonListWithDetails();
  }

  getPokemonListWithDetails(): void {
    this.pokemonService.getPokemonListaComDetalhes().subscribe(
      (pokemonList: any[]) => {
        this.pokemonLista = pokemonList;
        console.log(this.pokemonLista)
      },
      (error: any) => {
        console.log('Error:', error);
      }
    );
  }
}
