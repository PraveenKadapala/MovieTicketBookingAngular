import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/Services/apicall.service';
import { BookingService } from 'src/app/Services/booking.service';

@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.css']
})
export class TheatersComponent implements OnInit {

showtime_list:any[]=[]

theaterform= new FormGroup({
  theater : new FormControl('')
})

  constructor(public apicallservice : ApicallService, public bookingservice:BookingService,public router:Router) { }

ontheater(){
  
}

  ngOnInit(): void {
  }

  get theater(){
    return this.theaterform.get('theater')
  }
}
