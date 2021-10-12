import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablaCPage } from './tabla-c.page';

const routes: Routes = [
  {
    path: '',
    component: TablaCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablaCPageRoutingModule {}
