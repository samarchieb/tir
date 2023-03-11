import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuiSommeNousComponent } from './admin-qui-somme-nous.component';

describe('AdminQuiSommeNousComponent', () => {
  let component: AdminQuiSommeNousComponent;
  let fixture: ComponentFixture<AdminQuiSommeNousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminQuiSommeNousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminQuiSommeNousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
