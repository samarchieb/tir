import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calendrier2024Component } from './calendrier2024.component';

describe('Calendrier2024Component', () => {
  let component: Calendrier2024Component;
  let fixture: ComponentFixture<Calendrier2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calendrier2024Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calendrier2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
