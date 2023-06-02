import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListaComponent } from './pokemon-lista.component';

describe('PokemonListaComponent', () => {
  let component: PokemonListaComponent;
  let fixture: ComponentFixture<PokemonListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
