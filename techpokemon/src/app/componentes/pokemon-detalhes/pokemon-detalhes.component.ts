import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-detalhes',
  templateUrl: './pokemon-detalhes.component.html',
  styleUrls: ['./pokemon-detalhes.component.scss']
})
export class PokemonDetalhesComponent {
  pokemonId!: number;
  pokemon:any = {};
  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}
  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.pokemonId = Number(params.get('id'));
      this.pokemonService.getPokemonDetalhe(this.pokemonId).subscribe((data)=>{
       this.pokemon = data;
       console.log(this.pokemon);
      })
      // Carregar os detalhes do Pokémon com o ID correspondente
      // ...
    });
  }

   converterKgPounds(pounds:any) {
    var kilograms = pounds * 0.453592;
    return kilograms.toFixed(2);
  }

  converterFootMetros(foot:any) {
    var metros = foot * 0.3048;
    return metros.toFixed(2);
  }
}
