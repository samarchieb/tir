import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupeDeTunisieDesJeunesComponent } from './coupe-de-tunisie-des-jeunes.component';

describe('CoupeDeTunisieDesJeunesComponent', () => {
  let component: CoupeDeTunisieDesJeunesComponent;
  let fixture: ComponentFixture<CoupeDeTunisieDesJeunesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoupeDeTunisieDesJeunesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoupeDeTunisieDesJeunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
