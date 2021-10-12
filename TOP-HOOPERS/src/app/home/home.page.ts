import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  movenoticias(){
    //codigo para movernos a informes
    this.router.navigate(['/noticias']);
  }

  moveTablas(){
    //codigo para movernos a tablas
    this.router.navigate(['/tablas']);
  }

  moveSeguirEquipo(){
    //codigo para movernos a Seguir equipo
    this.router.navigate(['/seguir-equipo']);
  }
}
