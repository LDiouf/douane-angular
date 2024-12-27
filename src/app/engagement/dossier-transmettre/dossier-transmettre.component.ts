import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-dossier-transmettre',
  templateUrl: './dossier-transmettre.component.html',
  styleUrls: ['./dossier-transmettre.component.css']
})
export class DossierTransmettreComponent {
  constructor(private route:ActivatedRoute, private router:Router){}

  goToComptable(){
    this.router.navigate(["comptable"])
  }

}
