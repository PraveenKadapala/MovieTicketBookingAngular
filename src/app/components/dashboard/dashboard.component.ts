import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/Services/apicall.service';
import { BookingService } from 'src/app/Services/booking.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  movies_list:any[]=[]


  locationform= new FormGroup({
    location : new FormControl('')
  })

  dashboardform= new FormGroup({})

  constructor(public apicallservice : ApicallService, public bookingservice:BookingService,public router:Router) { }

  
  onlogout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }




  onlocation(){
    this.bookingservice.searchlocation(this.locationform.value).subscribe({next:(res) =>{ 
      if(res && res['status']=="ok"){
        console.log("Selected location is :" , res);
        const location=(res['data']['location'])
        console.log("Selected location_id :" , location);
        this.movies_list=[]
          this.bookingservice.getmovies(location).subscribe({next:(response:any) =>{ 
            console.log(response)

            for(let movie of response){
              this.movies_list.push(movie.title)
            }
            this.bookingservice.setmovielist(this.movies_list)
            console.log(this.movies_list)
          }
          })

      }else if(res['status']=="False"){
        console.log("Location not found")
        alert("Location not found")
        
      }
    },error:(err)=>{
      console.log("Error Occured")
      alert("Error Occured")
    }
    })

  }
  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.apicallservice.todashboard(localStorage.getItem('token')).subscribe({next:(res) =>{
        if(res && res['status']=='ok'){
          console.log(res)
          alert("Welcome to dashboard")
        }else{
          alert("Something went wrong")
        }
      },error:(err) =>{
        if(err){
          alert("Error occured")
        }
      }
      })
    }

  }
  get location(){
    return this.locationform.get('location')
  }

}
