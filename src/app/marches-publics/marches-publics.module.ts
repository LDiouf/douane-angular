import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppelOffreComponent } from './appel-offre/appel-offre.component';
import { MarchePublicsComponent } from './marche-publics/marche-publics.component';
import { ProjetMarcheComponent } from './projet-marche/projet-marche.component';

const marcheRoutes: Routes = [
  {path: "offre",component: AppelOffreComponent},
  {path: "marche-publics",component: MarchePublicsComponent},
  {path: "marche",component: ProjetMarcheComponent},
]

@NgModule({
  declarations: [
    AppelOffreComponent,
    MarchePublicsComponent,
    ProjetMarcheComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(marcheRoutes)
  ]
})
export class MarchesPublicsModule { }
