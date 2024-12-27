import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-situation-budgetaire',
  templateUrl: './situation-budgetaire.component.html',
  styleUrls: ['./situation-budgetaire.component.css']
})
export class SituationBudgetaireComponent {
  constructor(private route:ActivatedRoute, private router:Router){}
  goToConsultation(){
    this.router.navigate(["consultation"])
  }

}
