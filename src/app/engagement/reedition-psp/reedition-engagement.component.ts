import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reedition-engagement',
  templateUrl: './reedition-engagement.component.html',
  styleUrls: ['./reedition-engagement.component.css']
})
export class ReeditionEngagementComponent {
  constructor(private route:ActivatedRoute, private router:Router){}

  goToComptable(){
    this.router.navigate(["/comptable"])
  }

}
