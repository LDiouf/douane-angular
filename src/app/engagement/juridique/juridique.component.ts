import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-juridique',
  templateUrl: './juridique.component.html',
  styleUrls: ['./juridique.component.css']
})
export class JuridiqueComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  goToDirection(){
    this.router.navigate(['/direction']);
  }

  goToEnregistrer(){
    this.router.navigate(['/enregistrer']);
  }

  goToConsultation(){
    this.router.navigate(['/consultation-juridique']);
  }

  goToDossier(){
    this.router.navigate(['/dossier-juridique']);
  }

  goToTraitement(){
    this.router.navigate(['/traitement-juridique']);
  }

  goToReedition(){
    this.router.navigate(['/reedition-juridique']);
  }


}
