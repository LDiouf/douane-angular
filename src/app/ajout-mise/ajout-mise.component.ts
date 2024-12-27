import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajout-mise',
  templateUrl: './ajout-mise.component.html',
  styleUrls: ['./ajout-mise.component.css']
})
export class AjoutMiseComponent {
  constructor(private route:ActivatedRoute, private router:Router){}

  goToAppel(){
    this.router.navigate(["/offre"])
  }

}
