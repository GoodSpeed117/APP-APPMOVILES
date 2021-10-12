import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguirEquipoPageRoutingModule } from './seguir-equipo-routing.module';

import { SeguirEquipoPage } from './seguir-equipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguirEquipoPageRoutingModule
  ],
  declarations: [SeguirEquipoPage]
})
export class SeguirEquipoPageModule {}
