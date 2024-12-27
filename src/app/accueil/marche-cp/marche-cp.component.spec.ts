import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcheCpComponent } from './marche-cp.component';

describe('MarcheCpComponent', () => {
  let component: MarcheCpComponent;
  let fixture: ComponentFixture<MarcheCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcheCpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcheCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
