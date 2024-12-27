import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ordonnancement',
  templateUrl: './ordonnancement.component.html',
  styleUrls: ['./ordonnancement.component.css']
})
export class OrdonnancementComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  goToDirection(){
    this.router.navigate(['/direction']);
  }

  goToJournal(){
    this.router.navigate(["/journal"])
  }

}
