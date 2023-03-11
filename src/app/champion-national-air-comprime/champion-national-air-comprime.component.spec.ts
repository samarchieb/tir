import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionNationalAirComprimeComponent } from './champion-national-air-comprime.component';

describe('ChampionNationalAirComprimeComponent', () => {
  let component: ChampionNationalAirComprimeComponent;
  let fixture: ComponentFixture<ChampionNationalAirComprimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionNationalAirComprimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionNationalAirComprimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
