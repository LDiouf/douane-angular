import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMiseComponent } from './ajout-mise.component';

describe('AjoutMiseComponent', () => {
  let component: AjoutMiseComponent;
  let fixture: ComponentFixture<AjoutMiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutMiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutMiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
