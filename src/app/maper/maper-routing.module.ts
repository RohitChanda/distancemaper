import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { HomeComponent } from './home/home.component';
import { UserdashComponent } from './userdash/userdash.component';

const routes: Routes = [ 
  {path:'',component:HomeComponent},
  {path:'admin',component:AdmindashComponent},
  {path:'user',component:UserdashComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaperRoutingModule { }
