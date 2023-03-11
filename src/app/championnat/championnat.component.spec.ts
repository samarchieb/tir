import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionnatComponent } from './championnat.component';

describe('ChampionnatComponent', () => {
  let component: ChampionnatComponent;
  let fixture: ComponentFixture<ChampionnatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionnatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionnatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
