import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-liquidation',
  templateUrl: './liquidation.component.html',
  styleUrls: ['./liquidation.component.css']
})
export class LiquidationComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  goToDirection(){
    this.router.navigate(['/direction']);
  }

  goToNouveau(){
    this.router.navigate(["/nouveau-liquidation"])
  }

  goToConsultation(){
    this.router.navigate(["/consultation-liquidation"])
  }
  goToDossier(){
    this.router.navigate(["/dossier-liquidation"])
  }

}
