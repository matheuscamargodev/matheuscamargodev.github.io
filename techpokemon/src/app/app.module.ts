import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListaComponent } from './componentes/pokemon-lista/pokemon-lista.component';
import { PokemonListaCardComponent } from './componentes/pokemon-lista-card/pokemon-lista-card.component';
import { PokemonRadioAnimadoComponent } from './componentes/pokemon-radio-animado/pokemon-radio-animado.component';
import { PokemonBarraPesquisaComponent } from './componentes/pokemon-barra-pesquisa/pokemon-barra-pesquisa.component';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { pokemonReducer } from './ngrx/pokemon.reducer';
import { PokemonEffects } from './ngrx/pokemon.effects';
import { RouterModule } from '@angular/router';

import {
  SweetAlert2LoaderService,
  SweetAlert2Module,
} from '@sweetalert2/ngx-sweetalert2';
import { PokemonsComponent } from './componentes/pokemons/pokemons.component';
import { PokemonDetalhesComponent } from './componentes/pokemon-detalhes/pokemon-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListaComponent,
    PokemonListaCardComponent,
    PokemonRadioAnimadoComponent,
    PokemonBarraPesquisaComponent,
    PokemonsComponent,
    PokemonDetalhesComponent,
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    SweetAlert2Module,
    SweetAlert2Module.forRoot(),
    StoreModule.forRoot({ pokemons: pokemonReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true }),
    EffectsModule.forRoot([PokemonEffects]),
  ],
  providers: [SweetAlert2LoaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
