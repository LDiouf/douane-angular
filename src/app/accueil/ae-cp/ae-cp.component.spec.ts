import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeCpComponent } from './ae-cp.component';

describe('AeCpComponent', () => {
  let component: AeCpComponent;
  let fixture: ComponentFixture<AeCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeCpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
