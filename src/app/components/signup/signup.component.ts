import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { ApicallService } from 'src/app/Services/apicall.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  signupform= new FormGroup({
    name :new FormControl(''),
    phoneno : new FormControl(''),
    email :new FormControl(''),
    password : new FormControl('')
  })
  constructor(public apicallservice:ApicallService,public router:Router) { }

  signup(){
      this.apicallservice.usersignup(this.signupform.value).subscribe({ next: (res)=>{

        if(res && res['status']=='ok' && res['data']['_id']){
          alert("Signup Successful")
          this.router.navigate(['/login']);
          console.log(res)
      }else if(res['status']=='error'){
        alert("Email already registered, Use different email")
      }
    }, error:(err)=>{
      if(err){
        alert("Error Occured")
      }
      },
    })

    }
  get name(){
    return this.signupform.get('name')
  }
  get phoneno(){
    return this.signupform.get('phoneno')
  }
  get email(){
    return this.signupform.get('email')
  }
  get password(){
    return this.signupform.get('password')
  }

  ngOnInit(): void {
  }

}


