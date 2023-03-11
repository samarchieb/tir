import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupeDeTunisieAirComprimeComponent } from './coupe-de-tunisie-air-comprime.component';

describe('CoupeDeTunisieAirComprimeComponent', () => {
  let component: CoupeDeTunisieAirComprimeComponent;
  let fixture: ComponentFixture<CoupeDeTunisieAirComprimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoupeDeTunisieAirComprimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoupeDeTunisieAirComprimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
