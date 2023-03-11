import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceclubeComponent } from './espaceclube.component';

describe('EspaceclubeComponent', () => {
  let component: EspaceclubeComponent;
  let fixture: ComponentFixture<EspaceclubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceclubeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceclubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
