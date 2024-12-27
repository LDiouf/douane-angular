import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrdonnancementComponent } from './ordonnancement/ordonnancement.component';
import { JournalComponent } from './journal/journal.component';


const ordonnancementRoutes: Routes = [
  {path: "ordonnancement",component: OrdonnancementComponent},
  {path: "journal",component: JournalComponent},
]

@NgModule({
  declarations: [
    OrdonnancementComponent,
    JournalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ordonnancementRoutes)
  ]
})
export class OrdonnancementsModule { }
