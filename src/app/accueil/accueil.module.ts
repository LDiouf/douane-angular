import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AeCpComponent } from './ae-cp/ae-cp.component';
import { MarcheCpComponent } from './marche-cp/marche-cp.component';
import { EngagementCpComponent } from './engagement-cp/engagement-cp.component';
import { LiquidationCpComponent } from './liquidation-cp/liquidation-cp.component';

const accueilRoutes: Routes = [
  {path: "aecp",component: AeCpComponent}, 
  {path: "marche-cp",component: MarcheCpComponent},
  {path: "engagement-cp",component: EngagementCpComponent},
  {path: "liquidation-cp",component: LiquidationCpComponent},
  
]

@NgModule({
  declarations: [
    AeCpComponent,
    MarcheCpComponent,
    EngagementCpComponent,
    LiquidationCpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(accueilRoutes)
  ]
})
export class AccueilModule { }
