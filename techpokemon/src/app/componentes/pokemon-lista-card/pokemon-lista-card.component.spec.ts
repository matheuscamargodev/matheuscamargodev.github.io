import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListaCardComponent } from './pokemon-lista-card.component';

describe('PokemonListaCardComponent', () => {
  let component: PokemonListaCardComponent;
  let fixture: ComponentFixture<PokemonListaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListaCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonListaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
