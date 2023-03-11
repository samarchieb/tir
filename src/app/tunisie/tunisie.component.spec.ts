import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunisieComponent } from './tunisie.component';

describe('TunisieComponent', () => {
  let component: TunisieComponent;
  let fixture: ComponentFixture<TunisieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TunisieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TunisieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
