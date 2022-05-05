import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/Services/apicall.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform= new FormGroup({
    email :new FormControl(''),
    password : new FormControl('')
  })
  constructor(public apicallservice:ApicallService,public router:Router) { }

  login(){
    this.apicallservice.userlogin(this.loginform.value).subscribe({next:(res) =>{ 
      if(res && res['status']=="ok"){
        localStorage.setItem('token' , res['data']['token'])
        console.log("Response from API is  " , res)
        this.router.navigate(['/dashboard']);

      }else if(res['status']=="False"){
        console.log("Entered credentials does not match")
        alert("Entered credentials does not match")
        
      }
    },error:(err)=>{
      console.log("Error Occured")
      alert("Error Occured")
    }
    })
  }


  get email(){
    return this.loginform.get('email')
  }
  get password(){
    return this.loginform.get('password')
  }
  ngOnInit(): void {
  }

}
