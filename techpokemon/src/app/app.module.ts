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
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListaComponent,
    PokemonListaCardComponent,
    PokemonRadioAnimadoComponent,
    PokemonBarraPesquisaComponent,
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
