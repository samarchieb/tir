import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAdministratifComponent } from './staff-administratif.component';

describe('StaffAdministratifComponent', () => {
  let component: StaffAdministratifComponent;
  let fixture: ComponentFixture<StaffAdministratifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffAdministratifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffAdministratifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
