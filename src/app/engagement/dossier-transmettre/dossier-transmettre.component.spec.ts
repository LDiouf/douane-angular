import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierTransmettreComponent } from './dossier-transmettre.component';

describe('DossierTransmettreComponent', () => {
  let component: DossierTransmettreComponent;
  let fixture: ComponentFixture<DossierTransmettreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierTransmettreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DossierTransmettreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
