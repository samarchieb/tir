import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionNationalBallTrapComponent } from './champion-national-ball-trap.component';

describe('ChampionNationalBallTrapComponent', () => {
  let component: ChampionNationalBallTrapComponent;
  let fixture: ComponentFixture<ChampionNationalBallTrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionNationalBallTrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionNationalBallTrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
