import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consultation-mise',
  templateUrl: './consultation-mise.component.html',
  styleUrls: ['./consultation-mise.component.css']
})
export class ConsultationMiseComponent {
  constructor(private route:ActivatedRoute, private router:Router){}

  goToComptable(){
    this.router.navigate(["/comptable"])
  }

}
