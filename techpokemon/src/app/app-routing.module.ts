import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

import { PokemonsComponent } from './componentes/pokemons/pokemons.component';
import { PokemonDetalhesComponent } from './componentes/pokemon-detalhes/pokemon-detalhes.component';

const routes: Routes = [

  { path: 'pokemons/', component: PokemonsComponent },
  { path: 'pokemon/:id', component: PokemonDetalhesComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
