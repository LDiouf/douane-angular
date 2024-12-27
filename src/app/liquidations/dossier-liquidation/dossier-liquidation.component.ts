import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dossier-liquidation',
  templateUrl: './dossier-liquidation.component.html',
  styleUrls: ['./dossier-liquidation.component.css']
})
export class DossierLiquidationComponent {
  constructor(private route:ActivatedRoute, private router:Router){}

  goToLiquidation(){
    this.router.navigate(["liquidation"])

  }

}
