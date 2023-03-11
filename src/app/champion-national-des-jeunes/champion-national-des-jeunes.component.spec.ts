import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionNationalDesJeunesComponent } from './champion-national-des-jeunes.component';

describe('ChampionNationalDesJeunesComponent', () => {
  let component: ChampionNationalDesJeunesComponent;
  let fixture: ComponentFixture<ChampionNationalDesJeunesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionNationalDesJeunesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionNationalDesJeunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
