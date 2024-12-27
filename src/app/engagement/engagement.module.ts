import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComptableComponent } from './comptable/comptable.component';
import { ConsultationJuridiqueComponent } from './consultation-juridique/consultation-juridique.component';
import { ConsultationMiseComponent } from './consultation-mise/consultation-mise.component';
import { DossierTransmettreComponent } from './dossier-transmettre/dossier-transmettre.component';
import { EnregistrerComponent } from './enregistrer/enregistrer.component';
import { JuridiqueComponent } from './juridique/juridique.component';
import { NouveauComponent } from './nouveau/nouveau.component';
import { ReeditionBordereauxComponent } from './reedition-bordereaux/reedition-bordereaux.component';
import { ReeditionJuridiqueComponent } from './reedition-juridique/reedition-juridique.component';
import { TraitementJuridiqueComponent } from './traitement-juridique/traitement-juridique.component';
import { TraitementRejetComptComponent } from './traitement-rejet-compt/traitement-rejet-compt.component';
import { BorderCardDirective } from './border-card.directive';
import { ReeditionEngagementComponent } from './reedition-psp/reedition-engagement.component';
import { RouterModule, Routes } from '@angular/router';
import { DirectionComponent } from './direction/direction.component';
import { DossierJuridiqueComponent } from './dossier-juridique/dossier-juridique.component';

const engagementRoutes: Routes = [
  {path: "direction",component: DirectionComponent},
  {path: "comptable",component: ComptableComponent},
  {path: "bordereaux",component: ReeditionBordereauxComponent},
  {path: "juridique",component: JuridiqueComponent},
  {path: "nouveau",component: NouveauComponent},
  {path: "mise",component: ConsultationMiseComponent},
  {path: "reedition-juridique",component: ReeditionJuridiqueComponent},
  {path: "traitement-juridique",component: TraitementJuridiqueComponent},
  {path: "enregistrer",component: EnregistrerComponent},
  {path: "consultation-juridique",component: ConsultationMiseComponent},
  {path: "traitement-rejet",component: TraitementRejetComptComponent},
  {path: "reedition-psp",component: ReeditionEngagementComponent},
  {path: "dossier-transmettre",component: DossierTransmettreComponent},
  {path: "dossier-juridique",component: DossierJuridiqueComponent},
]

@NgModule({
  declarations: [
    DirectionComponent,
    ComptableComponent,
    ConsultationJuridiqueComponent,
    ConsultationMiseComponent,
    DossierTransmettreComponent,
    EnregistrerComponent,
    JuridiqueComponent,
    NouveauComponent,
    ReeditionBordereauxComponent,
    ReeditionJuridiqueComponent,
    TraitementJuridiqueComponent,
    TraitementRejetComptComponent,
    BorderCardDirective,
    ReeditionEngagementComponent,
    JuridiqueComponent,
    DossierJuridiqueComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(engagementRoutes)
  ]
})
export class EngagementModule { }
