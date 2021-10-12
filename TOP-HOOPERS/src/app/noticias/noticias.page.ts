import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backNoticias(){
    //codigo para back home 
    this.router.navigate(['/home']);

  }
}
