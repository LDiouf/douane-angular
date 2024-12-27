import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchePublicsComponent } from './marche-publics.component';

describe('MarchePublicsComponent', () => {
  let component: MarchePublicsComponent;
  let fixture: ComponentFixture<MarchePublicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarchePublicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarchePublicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
