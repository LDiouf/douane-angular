import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent {
  constructor(private route:ActivatedRoute, private router:Router){}
  goToMandat(){
    this.router.navigate(["/ordonnancement"])
  }

}
