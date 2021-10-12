import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.page.html',
  styleUrls: ['./tablas.page.scss'],
})
export class TablasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backHome(){
    this.router.navigate(['/home']);
  }

  GoTablaA(){
    this.router.navigate(['/tabla-a']);
  }

  GoTablaB(){
    this.router.navigate(['/tabla-b']);
  }

  GoTablaC(){
    this.router.navigate(['/tabla-c']);
  }
}
