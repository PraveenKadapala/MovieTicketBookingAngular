import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApicallService } from '../Services/apicall.service';
import { NotificationService } from '../Services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthGuard implements CanActivate {

  admin:any
  constructor(public router:Router, public apicallservice:ApicallService,public notifyservice:NotificationService){}

  canActivate(){
    if(localStorage.getItem('token')){
      this.apicallservice.adminauthenticate(localStorage.getItem('token')).subscribe({next:(res) =>{
        if(res && res['status']=='ok'){
          console.log(res,"Admin authentication")
          this.apicallservice.admin=true
          return true
        }else{
          this.router.navigate(['/home'])
          console.log(res)
          this.notifyservice.showError("Access Denied")
          return false
        }
      }})
      return true
    }else{
      alert("Please Authenticate")
      this.router.navigate(['/login'])
      return false;
    }

  }
}

