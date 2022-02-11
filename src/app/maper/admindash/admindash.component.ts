import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
  defaultCityForm:FormGroup
  constructor(private dataService:ApiService,
    private router:Router) { 
      this.defaultCityForm=new FormGroup({
        email:new FormControl(localStorage.getItem('d_email')),
        city:new FormControl(null, [Validators.required]),
      });
    }

  ngOnInit(): void {
    this.dataService.authGuard();
  }

  submitDefCity(defaultCityForm){

    this.dataService.addDefultCity(defaultCityForm).subscribe((res)=>{
      if(res.success){
        alert(res.data);
      }
    });

  }
  handelLogout(){
    this.dataService.doLogout();
  }

}
