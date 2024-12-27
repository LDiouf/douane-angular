import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauLiquidationComponent } from './nouveau-liquidation.component';

describe('NouveauLiquidationComponent', () => {
  let component: NouveauLiquidationComponent;
  let fixture: ComponentFixture<NouveauLiquidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauLiquidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauLiquidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
