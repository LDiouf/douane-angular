import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapitreBudgetaireComponent } from './chapitre-budgetaire.component';

describe('ChapitreBudgetaireComponent', () => {
  let component: ChapitreBudgetaireComponent;
  let fixture: ComponentFixture<ChapitreBudgetaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapitreBudgetaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapitreBudgetaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
