import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidationCpComponent } from './liquidation-cp.component';

describe('LiquidationCpComponent', () => {
  let component: LiquidationCpComponent;
  let fixture: ComponentFixture<LiquidationCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidationCpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiquidationCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
