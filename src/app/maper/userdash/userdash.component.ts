import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {
  userCityForm:FormGroup
  result_flag:string;
  isflag:boolean=false;
  constructor(private dataService:ApiService,
    private router:Router) { 
      this.userCityForm=new FormGroup({
        city:new FormControl(null, [Validators.required])
      });
    }

  ngOnInit(): void {
    this.dataService.authGuard();
  }

  checkDistance(userCityForm){
    this.dataService.handelcheckDistance(userCityForm).subscribe((res)=>{
      if(res.success){
        this.result_flag=res.flag;
        console.log("flag is:"+this.result_flag)
        this.isflag=true;
      }
    })
  }

  handelLogout(){
    this.dataService.doLogout();
  }

}
