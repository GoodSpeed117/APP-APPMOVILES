import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablaBPageRoutingModule } from './tabla-b-routing.module';

import { TablaBPage } from './tabla-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablaBPageRoutingModule
  ],
  declarations: [TablaBPage]
})
export class TablaBPageModule {}
