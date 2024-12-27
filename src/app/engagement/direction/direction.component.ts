import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import the correct Router module
import { Douane } from '../../db/douane';
import { TOLAS } from '../../db/list-menu';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {
  tolaList = TOLAS;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToJuridique(){
    this.router.navigate(['/juridique']);
  }

  goToLiquidation(){
    this.router.navigate(['/liquidation']);
  }

  goToOrdonnancement(){
    this.router.navigate(['/ordonnancement']);
  }

  goToComptable(){
    this.router.navigate(['/comptable']);
  }

  goToConsultation(){
    this.router.navigate(['/consultation']);
  }

  goToMarche(){
    this.router.navigate(['/marche-publics']);
  }

}
