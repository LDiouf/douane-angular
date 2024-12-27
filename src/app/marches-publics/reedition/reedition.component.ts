import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reedition',
  templateUrl: './reedition.component.html',
  styleUrls: ['./reedition.component.css']
})
export class ReeditionComponent {

  constructor(private route:ActivatedRoute, private router:Router){}

  goToMarchepublic(){
    this.router.navigate(["/marche-publics"])
  }

}
