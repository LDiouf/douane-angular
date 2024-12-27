import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementJuridiqueComponent } from './traitement-juridique.component';

describe('TraitementJuridiqueComponent', () => {
  let component: TraitementJuridiqueComponent;
  let fixture: ComponentFixture<TraitementJuridiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitementJuridiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraitementJuridiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
