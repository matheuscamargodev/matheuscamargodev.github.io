import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detalhes',
  templateUrl: './pokemon-detalhes.component.html',
  styleUrls: ['./pokemon-detalhes.component.scss']
})
export class PokemonDetalhesComponent {
  pokemonId!: number;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.pokemonId = Number(params.get('id'));
      // Carregar os detalhes do Pokémon com o ID correspondente
      // ...
    });
  }
}
