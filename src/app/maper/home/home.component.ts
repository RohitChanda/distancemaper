import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm:FormGroup  ;
  userLoginForm:FormGroup  ;

  isAdminLogin:boolean=false;
  isUserLogin:boolean=false;

  adminEmail:string='admin@gmail.com';
  adminPass:string='admin123';
  userEmail:string='rohit@gmail.com';
  userPass:string='rohit1998';

  constructor(private dataService:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
    this.userLoginForm=new FormGroup({
      email:new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });

  }
  activeAdminLogin(){ //admin
    this.isUserLogin=false;
    if(this.isAdminLogin===false){
      this.isAdminLogin=true
    }else{
      this.isAdminLogin=false
    }
  }
  activeUserLogin(){ //user
    this.isAdminLogin=false;
    if(this.isUserLogin===false){
      this.isUserLogin=true
    }else{
      this.isUserLogin=false
    }
  }

  submitLoginForm(loginForm){//admin
    this.dataService.adminLogin(loginForm).subscribe((res)=>{
      if(res.success){
        localStorage.setItem('d_email',res.email);
        this.router.navigate(['/admin']);
      }
      alert(res.data)
    });

  }
  userSubmitLoginForm(userLoginForm){//user
    this.dataService.userlogin(userLoginForm).subscribe((res)=>{
      if(res.success){
        localStorage.setItem('d_email',res.email);
        this.router.navigate(['/user']);
      }
      alert(res.data);
    });
  }

}
