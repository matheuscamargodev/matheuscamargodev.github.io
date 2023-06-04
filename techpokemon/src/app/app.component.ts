import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon/pokemon.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ParamsConsulta, Pokemon } from './ngrx/pokemon.model';
import { PokemonState } from './ngrx/pokemon.reducer';
import { selectComentarios, selectFavoritos } from './ngrx/pokemon.selectors';
import { CONSTANTES } from './utils/constantes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(

  ) {}


}
