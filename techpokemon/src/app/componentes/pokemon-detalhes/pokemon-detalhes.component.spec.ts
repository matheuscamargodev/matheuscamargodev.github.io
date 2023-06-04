import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetalhesComponent } from './pokemon-detalhes.component';

describe('PokemonDetalhesComponent', () => {
  let component: PokemonDetalhesComponent;
  let fixture: ComponentFixture<PokemonDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
