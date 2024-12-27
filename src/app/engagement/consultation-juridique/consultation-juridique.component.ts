import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-consultation-juridique',
  templateUrl: './consultation-juridique.component.html',
  styleUrls: ['./consultation-juridique.component.css']
})
export class ConsultationJuridiqueComponent {
  constructor(private route:ActivatedRoute, private router:Router){}

  goToJuridique(){

  }

}
