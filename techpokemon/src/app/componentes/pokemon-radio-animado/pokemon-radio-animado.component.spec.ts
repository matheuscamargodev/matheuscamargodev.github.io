import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonRadioAnimadoComponent } from './pokemon-radio-animado.component';

describe('PokemonRadioAnimadoComponent', () => {
  let component: PokemonRadioAnimadoComponent;
  let fixture: ComponentFixture<PokemonRadioAnimadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonRadioAnimadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonRadioAnimadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
