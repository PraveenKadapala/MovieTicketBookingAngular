import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { LoginComponent } from '../components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(public http : HttpClient) { }

userlogin(userdata:any){
  return this.http.post('http://localhost:9000/users/login' , userdata)
}

usersignup(userdata:any){
  return this.http.post('http://localhost:9000/users/signup' , userdata)
}
todashboard(token:any){
  const headers =new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer ${token}`
  })
  return this.http.get('http://localhost:9000/users/dashboard' , {headers : headers})
}

}
