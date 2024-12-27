import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouveau',
  templateUrl: './nouveau.component.html',
  styleUrls: ['./nouveau.component.css']
})
export class NouveauComponent {
  constructor(private route:ActivatedRoute, private router:Router){}

  goToComptable(){
    this.router.navigate(["/comptable"])
  }

}
