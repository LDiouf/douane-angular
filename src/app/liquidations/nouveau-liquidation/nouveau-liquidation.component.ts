import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-liquidation',
  templateUrl: './nouveau-liquidation.component.html',
  styleUrls: ['./nouveau-liquidation.component.css']
})
export class NouveauLiquidationComponent {
  constructor(private route:ActivatedRoute, private router:Router){}

  goToLiquidation(){
    this.router.navigate(["/liquidation"])

  }

}
