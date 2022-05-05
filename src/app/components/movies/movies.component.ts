import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/Services/apicall.service';
import { BookingService } from 'src/app/Services/booking.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

theaters_list:any[]=[]
movies_list:any
  movieform= new FormGroup({
    title : new FormControl('')
  })

  constructor(public bookingservice:BookingService,public router:Router) { }

  onmovie(){
    this.bookingservice.searchmovie(this.movieform.value).subscribe({next:(res) =>{ 
      if(res && res['status']=="ok"){
        console.log("Selected movie is :" , res);
        const movie=(res['data']['title'])
        console.log("Selected movie :" , movie);
        this.theaters_list=[]

          this.bookingservice.gettheaters(movie).subscribe({next:(response:any) =>{ 
            console.log(response)
            for(let item of response)
              this.theaters_list.push(item.theater)
          }
          })
      }else if(res['status']=="False"){
        console.log("Movie not found")
        alert("Movie not found")
        
      }
    },error:(err)=>{
      console.log("Error Occured")
      alert("Error Occured")
    }
    })

  }
  ngOnInit(): void {
    console.log(this.bookingservice.getmovielist())
  // this.movies_list=this.bookingservice.getmovielist()
  // console.log(this.movies_list)
  }

  get title(){
    return this.movieform.get('title')
  }
}
