import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-warriors',
  templateUrl: './warriors.page.html',
  styleUrls: ['./warriors.page.scss'],
})
export class WarriorsPage implements OnInit {

  constructor(
    private menu: MenuController,
    private router: Router
    ) { }

  ngOnInit() {
  }

  movetoJugadores(){
    //codigo para iniciar sesion 
    this.router.navigate(['/jugadores']);

  }
  movetoCalendario(){
    //codigo para iniciar sesion 
    this.router.navigate(['/calendario']);

  }
  movetoAdeudos(){
    //codigo para iniciar sesion 
    this.router.navigate(['/adeudos']);

  }
  backHome(){
    //codigo para back home 
    this.router.navigate(['/seguir-equipo']);
  }
}
