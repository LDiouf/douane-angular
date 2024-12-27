import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chapitre-budgetaire',
  templateUrl: './chapitre-budgetaire.component.html',
  styleUrls: ['./chapitre-budgetaire.component.css']
})
export class ChapitreBudgetaireComponent {
  constructor(private route:ActivatedRoute, private router:Router){}
  goToConsultation(){
    this.router.navigate(["consultation"])
  }

}
