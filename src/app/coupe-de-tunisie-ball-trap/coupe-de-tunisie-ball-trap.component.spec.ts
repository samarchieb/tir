import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupeDeTunisieBallTrapComponent } from './coupe-de-tunisie-ball-trap.component';

describe('CoupeDeTunisieBallTrapComponent', () => {
  let component: CoupeDeTunisieBallTrapComponent;
  let fixture: ComponentFixture<CoupeDeTunisieBallTrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoupeDeTunisieBallTrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoupeDeTunisieBallTrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
