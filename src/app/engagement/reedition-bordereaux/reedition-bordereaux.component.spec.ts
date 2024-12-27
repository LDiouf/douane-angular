import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReeditionBordereauxComponent } from './reedition-bordereaux.component';

describe('ReeditionBordereauxComponent', () => {
  let component: ReeditionBordereauxComponent;
  let fixture: ComponentFixture<ReeditionBordereauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReeditionBordereauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReeditionBordereauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
