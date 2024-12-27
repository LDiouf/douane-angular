import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comptable',
  templateUrl: './comptable.component.html',
  styleUrls: ['./comptable.component.css']
})
export class ComptableComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  goToDirection(){
    this.router.navigate(['/direction']);
  }

  goToNouveau(){
    this.router.navigate(['/nouveau']);
  }

  goToMise(){
    this.router.navigate(['/mise']);
  }

  goToDossier(){
    this.router.navigate(['/dossier-transmettre']);
  }
  goToPsp(){
    this.router.navigate(['/reedition-psp']);
  }

  goToBordereaux(){
    this.router.navigate(['/bordereaux']);
  }

  goTotraitement(){
    this.router.navigate(['/traitement-rejet']);
  }

}
