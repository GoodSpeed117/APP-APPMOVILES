import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablaCPageRoutingModule } from './tabla-c-routing.module';

import { TablaCPage } from './tabla-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablaCPageRoutingModule
  ],
  declarations: [TablaCPage]
})
export class TablaCPageModule {}
