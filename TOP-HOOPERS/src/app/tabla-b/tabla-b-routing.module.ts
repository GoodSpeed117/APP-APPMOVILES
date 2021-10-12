import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablaBPage } from './tabla-b.page';

const routes: Routes = [
  {
    path: '',
    component: TablaBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablaBPageRoutingModule {}
