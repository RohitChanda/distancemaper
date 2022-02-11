import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string="http://localhost:5000/api"
  constructor(private httpClient:HttpClient,private router:Router) { }

  adminLogin(loginform){
    return this.httpClient.post<any>(this.baseUrl + '/adminlogin',loginform);
  }
  userlogin(userLoginForm){
    return this.httpClient.post<any>(this.baseUrl + '/userlogin',userLoginForm);
  }

  addDefultCity(defaultCityForm){
    return this.httpClient.post<any>(this.baseUrl + '/admincity',defaultCityForm);
  }
  doLogout(){
    localStorage.removeItem('d_email');
    this.router.navigate(['/']);
  }

  handelcheckDistance(userCityForm){
    return this.httpClient.post<any>(this.baseUrl + '/finddistance',userCityForm);
  }
  authGuard(){
    if(!localStorage.getItem('d_email')){
      this.router.navigate(['/']);
      alert("You are not logged in")
    }
  }
}
