import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { AddtheaterComponent } from './addtheater/addtheater.component';
import { AddshowtimeComponent } from './addshowtime/addshowtime.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddlocationComponent,
    AddmovieComponent,
    AddtheaterComponent,
    AddshowtimeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
