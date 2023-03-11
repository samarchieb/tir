import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnciensPresidentsComponent } from './anciens-presidents.component';

describe('AnciensPresidentsComponent', () => {
  let component: AnciensPresidentsComponent;
  let fixture: ComponentFixture<AnciensPresidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnciensPresidentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnciensPresidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
