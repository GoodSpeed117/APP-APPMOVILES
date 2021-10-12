import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguir-equipo',
  templateUrl: './seguir-equipo.page.html',
  styleUrls: ['./seguir-equipo.page.scss'],
})
export class SeguirEquipoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backSeguirEquipo(){
    //codigo para back home 
    this.router.navigate(['/home']);

  }

  movetoWarriors(){
    //codigo para movernos a informes
    this.router.navigate(['/warriors']);
  }

  movetoSixers(){
    //codigo para movernos a informes
    this.router.navigate(['/sixers']);
  }

  movetoBulls(){
    //codigo para movernos a informes
    this.router.navigate(['/bulls']);
  }
}
