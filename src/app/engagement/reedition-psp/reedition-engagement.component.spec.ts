import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReeditionEngagementComponent } from './reedition-engagement.component';

describe('ReeditionEngagementComponent', () => {
  let component: ReeditionEngagementComponent;
  let fixture: ComponentFixture<ReeditionEngagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReeditionEngagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReeditionEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
