import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablaAPageRoutingModule } from './tabla-a-routing.module';

import { TablaAPage } from './tabla-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablaAPageRoutingModule
  ],
  declarations: [TablaAPage]
})
export class TablaAPageModule {}
