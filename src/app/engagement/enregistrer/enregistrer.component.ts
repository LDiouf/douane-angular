import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-enregistrer',
  templateUrl: './enregistrer.component.html',
  styleUrls: ['./enregistrer.component.css']
})
export class EnregistrerComponent {
  constructor(private route:ActivatedRoute, private router:Router){}

  goToJuridique(){
    this.router.navigate(["/juridique"])
  }

}
