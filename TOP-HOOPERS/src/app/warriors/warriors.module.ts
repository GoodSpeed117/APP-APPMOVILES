import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarriorsPageRoutingModule } from './warriors-routing.module';

import { WarriorsPage } from './warriors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarriorsPageRoutingModule
  ],
  declarations: [WarriorsPage]
})
export class WarriorsPageModule {}
