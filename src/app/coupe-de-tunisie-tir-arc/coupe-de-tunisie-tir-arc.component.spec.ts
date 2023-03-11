import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupeDeTunisieTirArcComponent } from './coupe-de-tunisie-tir-arc.component';

describe('CoupeDeTunisieTirArcComponent', () => {
  let component: CoupeDeTunisieTirArcComponent;
  let fixture: ComponentFixture<CoupeDeTunisieTirArcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoupeDeTunisieTirArcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoupeDeTunisieTirArcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
