import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationBudgetaireComponent } from './situation-budgetaire.component';

describe('SituationBudgetaireComponent', () => {
  let component: SituationBudgetaireComponent;
  let fixture: ComponentFixture<SituationBudgetaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituationBudgetaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SituationBudgetaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
