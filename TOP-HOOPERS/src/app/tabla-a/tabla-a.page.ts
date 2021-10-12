import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabla-a',
  templateUrl: './tabla-a.page.html',
  styleUrls: ['./tabla-a.page.scss'],
})
export class TablaAPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backTablas(){
    this.router.navigate(['/tablas']);
  }


}
