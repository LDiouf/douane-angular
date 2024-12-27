import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-traitement-juridique',
  templateUrl: './traitement-juridique.component.html',
  styleUrls: ['./traitement-juridique.component.css']
})
export class TraitementJuridiqueComponent {
  constructor(private route:ActivatedRoute, private router:Router){}
  
  goToJuridique(){
    this.router.navigate(["/juridique"])
  }

}
