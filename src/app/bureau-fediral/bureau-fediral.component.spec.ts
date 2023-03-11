import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauFediralComponent } from './bureau-fediral.component';

describe('BureauFediralComponent', () => {
  let component: BureauFediralComponent;
  let fixture: ComponentFixture<BureauFediralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BureauFediralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BureauFediralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
