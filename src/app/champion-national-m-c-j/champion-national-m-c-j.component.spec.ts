import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionNationalMCJComponent } from './champion-national-m-c-j.component';

describe('ChampionNationalMCJComponent', () => {
  let component: ChampionNationalMCJComponent;
  let fixture: ComponentFixture<ChampionNationalMCJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionNationalMCJComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionNationalMCJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
