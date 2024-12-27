import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-marche-publics',
  templateUrl: './marche-publics.component.html',
  styleUrls: ['./marche-publics.component.css']
})
export class MarchePublicsComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  goToDirection(){
    this.router.navigate(['/direction']);
  }
  goToOffre(){
    this.router.navigate(['/offre']);
  }
  goToMarche(){
    this.router.navigate(['/marche']);
  }

  goToReedition(){
    this.router.navigate(['/reedition']);
  }

}
