import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChapitreBudgetaireComponent } from './chapitre-budgetaire/chapitre-budgetaire.component';
import { SituationBudgetaireComponent } from './situation-budgetaire/situation-budgetaire.component';
import { EditionComponent } from './edition/edition.component';
import { ConsultationComponent } from './consultation/consultation.component';


const consultationRoutes: Routes = [
  {path: "chapitre-budgetaire",component: ChapitreBudgetaireComponent},
  {path: "situation-budgetaire",component: SituationBudgetaireComponent},
  {path: "edition",component: EditionComponent},
  {path: "consultation",component: ConsultationComponent},
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(consultationRoutes)
  ]
})
export class ConsultationsModule { }
