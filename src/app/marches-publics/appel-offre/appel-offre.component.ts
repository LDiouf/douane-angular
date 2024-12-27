import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appel-offre',
  templateUrl: './appel-offre.component.html',
  styleUrls: ['./appel-offre.component.css']
})
export class AppelOffreComponent {
  constructor(private route:ActivatedRoute, private router:Router){}

  goToMarchepublic(){
    this.router.navigate(["/marche-publics"])
  }

  goToAjout(){
    this.router.navigate(["/ajout"])
  }

}
