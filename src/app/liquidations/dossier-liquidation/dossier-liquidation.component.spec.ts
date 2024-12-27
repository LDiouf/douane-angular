import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierLiquidationComponent } from './dossier-liquidation.component';

describe('DossierLiquidationComponent', () => {
  let component: DossierLiquidationComponent;
  let fixture: ComponentFixture<DossierLiquidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierLiquidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DossierLiquidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
