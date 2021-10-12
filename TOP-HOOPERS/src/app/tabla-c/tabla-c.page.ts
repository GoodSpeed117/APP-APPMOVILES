import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabla-c',
  templateUrl: './tabla-c.page.html',
  styleUrls: ['./tabla-c.page.scss'],
})
export class TablaCPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backTablas(){
    this.router.navigate(['/tablas']);
  }

}
