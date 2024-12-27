import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationMiseComponent } from './consultation-mise.component';

describe('ConsultationMiseComponent', () => {
  let component: ConsultationMiseComponent;
  let fixture: ComponentFixture<ConsultationMiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationMiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationMiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
