import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTechniqueComponent } from './staff-technique.component';

describe('StaffTechniqueComponent', () => {
  let component: StaffTechniqueComponent;
  let fixture: ComponentFixture<StaffTechniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffTechniqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
