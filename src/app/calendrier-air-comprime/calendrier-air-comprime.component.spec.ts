import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierAirComprimeComponent } from './calendrier-air-comprime.component';

describe('CalendrierAirComprimeComponent', () => {
  let component: CalendrierAirComprimeComponent;
  let fixture: ComponentFixture<CalendrierAirComprimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendrierAirComprimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendrierAirComprimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
