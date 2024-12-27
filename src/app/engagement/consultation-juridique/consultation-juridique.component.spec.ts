import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationJuridiqueComponent } from './consultation-juridique.component';

describe('ConsultationJuridiqueComponent', () => {
  let component: ConsultationJuridiqueComponent;
  let fixture: ComponentFixture<ConsultationJuridiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationJuridiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationJuridiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
