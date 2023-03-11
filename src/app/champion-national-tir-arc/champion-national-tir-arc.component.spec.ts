import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionNationalTirArcComponent } from './champion-national-tir-arc.component';

describe('ChampionNationalTirArcComponent', () => {
  let component: ChampionNationalTirArcComponent;
  let fixture: ComponentFixture<ChampionNationalTirArcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionNationalTirArcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionNationalTirArcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
