import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adeudos',
  templateUrl: './adeudos.page.html',
  styleUrls: ['./adeudos.page.scss'],
})
export class AdeudosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backSeguirEquipo(){
    //codigo para back home 
    this.router.navigate(['/warriors']);
  }

}
