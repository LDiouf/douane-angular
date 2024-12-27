import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetMarcheComponent } from './projet-marche.component';

describe('ProjetMarcheComponent', () => {
  let component: ProjetMarcheComponent;
  let fixture: ComponentFixture<ProjetMarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetMarcheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetMarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
