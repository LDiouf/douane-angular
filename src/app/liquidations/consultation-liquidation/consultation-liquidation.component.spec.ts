import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationLiquidationComponent } from './consultation-liquidation.component';

describe('ConsultationLiquidationComponent', () => {
  let component: ConsultationLiquidationComponent;
  let fixture: ComponentFixture<ConsultationLiquidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationLiquidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationLiquidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
