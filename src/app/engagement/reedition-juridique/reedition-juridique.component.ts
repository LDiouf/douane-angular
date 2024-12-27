import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reedition-juridique',
  templateUrl: './reedition-juridique.component.html',
  styleUrls: ['./reedition-juridique.component.css']
})
export class ReeditionJuridiqueComponent {
  constructor(private route:ActivatedRoute, private router:Router){}

  goToJuridique(){
    this.router.navigate(["/juridique"])
  }

}
