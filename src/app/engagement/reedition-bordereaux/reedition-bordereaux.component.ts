import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reedition-bordereaux',
  templateUrl: './reedition-bordereaux.component.html',
  styleUrls: ['./reedition-bordereaux.component.css']
})
export class ReeditionBordereauxComponent {

  constructor(private route:ActivatedRoute, private router:Router){}

  goToComptable(){
    this.router.navigate(["/comptable"])
  }

}
