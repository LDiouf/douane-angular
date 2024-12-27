import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiquidationComponent } from './liquidations/liquidation/liquidation.component';
import { DetailMenuComponent } from './db/detail-menu/detail-menu.component';
import { ReeditionComponent } from './marches-publics/reedition/reedition.component';
import { AjoutMiseComponent } from './ajout-mise/ajout-mise.component';



const routes: Routes = [
  

  {path: "liquidation",component: LiquidationComponent},
  { path: 'douane/:id', component: DetailMenuComponent} ,
  {path: "reedition",component: ReeditionComponent},
  {path: "ajout",component: AjoutMiseComponent},
    
 
  {path:"", redirectTo: "home",pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
