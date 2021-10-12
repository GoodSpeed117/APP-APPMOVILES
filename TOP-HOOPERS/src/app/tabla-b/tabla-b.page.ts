import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabla-b',
  templateUrl: './tabla-b.page.html',
  styleUrls: ['./tabla-b.page.scss'],
})
export class TablaBPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backTablas(){
    this.router.navigate(['/tablas']);
  }

}
