import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonsComponent } from './componentes/pokemons/pokemons.component';
import { PokemonDetalhesComponent } from './componentes/pokemon-detalhes/pokemon-detalhes.component';



const routes: Routes = [
  { path: '', component: PokemonsComponent },
  { path: 'pokemon/:id', component: PokemonDetalhesComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
