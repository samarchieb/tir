import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calendrier2022Component } from './calendrier2022.component';

describe('Calendrier2022Component', () => {
  let component: Calendrier2022Component;
  let fixture: ComponentFixture<Calendrier2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calendrier2022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calendrier2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
