import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierBallTrapComponent } from './calendrier-ball-trap.component';

describe('CalendrierBallTrapComponent', () => {
  let component: CalendrierBallTrapComponent;
  let fixture: ComponentFixture<CalendrierBallTrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendrierBallTrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendrierBallTrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
