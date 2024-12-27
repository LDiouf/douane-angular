import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  goToDirection(){
    this.router.navigate(['/direction']);
  }

  goToEdition(){
    this.router.navigate(['/edition']);
  }

  goToSituation(){
    this.router.navigate(['/situation-budgetaire']);
  }

  goToChapitre(){
    this.router.navigate(['/chapitre-budgetaire']);
  }

}
