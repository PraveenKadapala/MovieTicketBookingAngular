import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';


@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  loggedin:any
  admin:any=false
  constructor(public http : HttpClient, public router: Router,public notifyservice:NotificationService) { }

userlogin(userdata:any){
  return this.http.post('http://localhost:9000/users/login' , userdata)
}

usersignup(userdata:any){
  return this.http.post('http://localhost:9000/users/signup' , userdata)
}
authenticate(token:any){
  const headers =new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer ${token}`
  })
  return this.http.get('http://localhost:9000/users/home' , {headers : headers})
}
adminauthenticate(token:any){
  const headers =new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer ${token}`
  })
  return this.http.get('http://localhost:9000/users/adminhome' , {headers : headers})
}

userlogout(){
  this.notifyservice.showSuccess("Logout Success")
  localStorage.removeItem('token')
  localStorage.removeItem('email')
  localStorage.removeItem('name')
  localStorage.removeItem('location')
  localStorage.removeItem('movie')
  localStorage.removeItem('theater')
  localStorage.removeItem('showid')
  localStorage.removeItem('reservationid')
  this.loggedin=false
  this.router.navigate(['/login'])
}

login(val:any){
  this.loggedin=val
}
setisadmin(val:any){
  this.admin=val
}
getisadmin(){
  return this.admin
}
  

}
