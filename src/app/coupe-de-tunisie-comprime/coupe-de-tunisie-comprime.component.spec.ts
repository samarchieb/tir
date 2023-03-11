import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupeDeTunisieComprimeComponent } from './coupe-de-tunisie-comprime.component';

describe('CoupeDeTunisieComprimeComponent', () => {
  let component: CoupeDeTunisieComprimeComponent;
  let fixture: ComponentFixture<CoupeDeTunisieComprimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoupeDeTunisieComprimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoupeDeTunisieComprimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
