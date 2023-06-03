import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonBarraPesquisaComponent } from './pokemon-barra-pesquisa.component';

describe('PokemonBarraPesquisaComponent', () => {
  let component: PokemonBarraPesquisaComponent;
  let fixture: ComponentFixture<PokemonBarraPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonBarraPesquisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonBarraPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
