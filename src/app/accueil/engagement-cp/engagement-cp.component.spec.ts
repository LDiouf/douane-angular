import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementCpComponent } from './engagement-cp.component';

describe('EngagementCpComponent', () => {
  let component: EngagementCpComponent;
  let fixture: ComponentFixture<EngagementCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngagementCpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngagementCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
