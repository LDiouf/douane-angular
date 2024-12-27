import { Component, OnInit } from '@angular/core';
import { Douane } from '../douane';
import { ActivatedRoute, Router } from '@angular/router';
import { TOLAS } from '../list-menu';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit {

  tolaList: Douane[]|undefined
  douane: Douane|undefined

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    this.tolaList = TOLAS;
    const douaneId: string|null = this.route.snapshot.paramMap.get('id');
    if(douaneId !== null){ // Vérifiez si douaneId n'est pas null
      this.douane = this.tolaList.find(douane => douane.id == +douaneId )
    }
  }

  goToDirection(){
    this.router.navigate(['/direction']);
  }
}
