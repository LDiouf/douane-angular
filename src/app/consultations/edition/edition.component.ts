import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent {
  constructor(private route:ActivatedRoute, private router:Router){}
  goToConsultation(){
    this.router.navigate(["consultation"])
  }

}
