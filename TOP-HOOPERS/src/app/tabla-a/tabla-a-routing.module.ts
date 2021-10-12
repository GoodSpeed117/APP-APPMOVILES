import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablaAPage } from './tabla-a.page';

const routes: Routes = [
  {
    path: '',
    component: TablaAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablaAPageRoutingModule {}
