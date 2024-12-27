import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projet-marche',
  templateUrl: './projet-marche.component.html',
  styleUrls: ['./projet-marche.component.css']
})
export class ProjetMarcheComponent {
  constructor(private route:ActivatedRoute,private router:Router ){}

  goToMarchepublic(){
    this.router.navigate(["/marche-publics"])
  }

}
