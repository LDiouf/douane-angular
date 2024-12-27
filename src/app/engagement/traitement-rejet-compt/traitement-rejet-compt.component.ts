import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-traitement-rejet-compt',
  templateUrl: './traitement-rejet-compt.component.html',
  styleUrls: ['./traitement-rejet-compt.component.css']
})
export class TraitementRejetComptComponent {
  constructor(private route:ActivatedRoute, private router:Router){}

  goToComptable(){
    this.router.navigate(["/comptable"])
  }

}
