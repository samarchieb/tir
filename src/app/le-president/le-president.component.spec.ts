import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LePresidentComponent } from './le-president.component';

describe('LePresidentComponent', () => {
  let component: LePresidentComponent;
  let fixture: ComponentFixture<LePresidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LePresidentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LePresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
