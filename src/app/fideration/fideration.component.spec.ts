import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiderationComponent } from './fideration.component';

describe('FiderationComponent', () => {
  let component: FiderationComponent;
  let fixture: ComponentFixture<FiderationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiderationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiderationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
