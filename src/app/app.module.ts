import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiquidationComponent } from './liquidations/liquidation/liquidation.component';

import { DetailMenuComponent } from './db/detail-menu/detail-menu.component';
import { ReeditionComponent } from './marches-publics/reedition/reedition.component';
import { AjoutMiseComponent } from './ajout-mise/ajout-mise.component';
import { EngagementModule } from './engagement/engagement.module';
import { DbModule } from './db/db.module';
import { AccueilModule } from './accueil/accueil.module';
import { LiquidationsModule } from './liquidations/liquidations.module';
import { MarchesPublicsModule } from './marches-publics/marches-publics.module';
import { OrdonnancementsModule } from './ordonnancements/ordonnancements.module';
import { ConsultationsModule } from './consultations/consultations.module';


@NgModule({
  declarations: [
    AppComponent,
    LiquidationComponent,
    DetailMenuComponent,
    ReeditionComponent,
    AjoutMiseComponent
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EngagementModule,
    DbModule,
    AccueilModule,
    LiquidationsModule,
    MarchesPublicsModule,
    OrdonnancementsModule,
    ConsultationsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
