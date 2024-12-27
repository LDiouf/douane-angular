import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dossier-juridique',
  templateUrl: './dossier-juridique.component.html',
  styleUrls: ['./dossier-juridique.component.css']
})
export class DossierJuridiqueComponent {
  constructor(private routte:ActivatedRoute, private router:Router){}
  goToJuridique(){
    this.router.navigate(["/juridique"])
  }

}
