import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierTirAirComponent } from './calendrier-tir-air.component';

describe('CalendrierTirAirComponent', () => {
  let component: CalendrierTirAirComponent;
  let fixture: ComponentFixture<CalendrierTirAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendrierTirAirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendrierTirAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
