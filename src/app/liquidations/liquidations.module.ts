import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DossierLiquidationComponent } from './dossier-liquidation/dossier-liquidation.component';
import { ConsultationLiquidationComponent } from './consultation-liquidation/consultation-liquidation.component';
import { NouveauLiquidationComponent } from './nouveau-liquidation/nouveau-liquidation.component';


const liquidationRoutes: Routes = [
  {path: "dossier-liquidation",component: DossierLiquidationComponent},
  {path: "consultation-liquidation",component: ConsultationLiquidationComponent},
  {path: "nouveau-liquidation",component: NouveauLiquidationComponent},
]

@NgModule({
  declarations: [
    DossierLiquidationComponent,
    ConsultationLiquidationComponent,
    NouveauLiquidationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(liquidationRoutes)
  ]
})
export class LiquidationsModule { }
