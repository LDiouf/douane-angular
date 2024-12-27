import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consultation-liquidation',
  templateUrl: './consultation-liquidation.component.html',
  styleUrls: ['./consultation-liquidation.component.css']
})
export class ConsultationLiquidationComponent {
  constructor(private route:ActivatedRoute, private router:Router){

  }

  goToLiquidation(){
    this.router.navigate(["/liquidation"])
  }

}
