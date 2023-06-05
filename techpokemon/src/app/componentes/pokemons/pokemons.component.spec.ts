import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonsComponent } from './pokemons.component';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { Store, StoreModule } from '@ngrx/store';
import { loadPokemons } from '../../ngrx/pokemon.actions';

import { ParamsConsulta } from 'src/app/ngrx/pokemon.model';

describe('PokemonsComponent', () => {
  let component: PokemonsComponent;
  let fixture: ComponentFixture<PokemonsComponent>;
  let mockPokemonService: jasmine.SpyObj<PokemonService>;
  let mockStore: jasmine.SpyObj<Store<any>>;

  beforeEach(async () => {
    mockPokemonService = jasmine.createSpyObj('PokemonService', [
      'getInformacoesSalvas',
    ]);
    mockStore = jasmine.createSpyObj('Store', ['dispatch', 'pipe', 'select']);

    await TestBed.configureTestingModule({
      declarations: [PokemonsComponent],
      providers: [
        { provide: PokemonService, useValue: mockPokemonService },
        { provide: Store, useValue: mockStore },
      ],
      imports: [StoreModule.forRoot({})], // Importar o módulo do NGRX Store
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadPokemons action and set pokemons$ property', () => {
    const mockPokemons:any = [];
    const mockParams:ParamsConsulta = { offset: "0", limit: "20" };

    // Simular a seleção do estado e retorno dos pokémons
    mockStore.pipe.and.returnValue(mockStore);
    mockStore.select.and.returnValue(mockPokemons);

    component.carregaPokemonsDetalhes(mockParams);

    expect(mockStore.dispatch).toHaveBeenCalledWith(loadPokemons(mockParams));
    expect(component.pokemons$).toEqual(mockPokemons);
  });

  it('should call getInformacoesSalvas method on recuperaInformacoes', () => {
    component.recuperaInformacoes();
    expect(mockPokemonService.getInformacoesSalvas).toHaveBeenCalled();
  });

});
