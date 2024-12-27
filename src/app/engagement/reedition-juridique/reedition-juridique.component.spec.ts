import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReeditionJuridiqueComponent } from './reedition-juridique.component';

describe('ReeditionJuridiqueComponent', () => {
  let component: ReeditionJuridiqueComponent;
  let fixture: ComponentFixture<ReeditionJuridiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReeditionJuridiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReeditionJuridiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
