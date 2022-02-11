import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaperRoutingModule } from './maper-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmindashComponent } from './admindash/admindash.component';
import { UserdashComponent } from './userdash/userdash.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    AdmindashComponent,
    UserdashComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaperRoutingModule
  ]
})
export class MaperModule { }
