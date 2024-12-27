import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementRejetComptComponent } from './traitement-rejet-compt.component';

describe('TraitementRejetComptComponent', () => {
  let component: TraitementRejetComptComponent;
  let fixture: ComponentFixture<TraitementRejetComptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitementRejetComptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraitementRejetComptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
