import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApicallService } from '../Services/apicall.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(public router:Router, public apicallservice:ApicallService){}
  canActivate(){
    // if(localStorage.getItem('token')){
    //     return true;
    if(localStorage.getItem('token')){
      this.apicallservice.authenticate(localStorage.getItem('token')).subscribe({next:(res) =>{
        if(res && res['status']=='ok'){
          console.log(res)
          this.apicallservice.login(true)
          return true
        }else{
          if(localStorage.getItem('token')){
            localStorage.removeItem('token')
          }
          alert("Please Authenticate")
          this.router.navigate(['/login'])
          return false
        }
      }
      })
      return true
    }else{
      this.router.navigate(['/login'])
      return false;
    }

  }
}
