import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(public http : HttpClient) { }

  addlocation(userdata:any){
    return this.http.post('http://localhost:9000/location/addlocation' , userdata)
  }
  addmovie(userdata:any){
    return this.http.post('http://localhost:9000/movie/addmovie', userdata)
  }

  addtheater(userdata:any){
    return this.http.post('http://localhost:9000/theater/addtheater' , userdata)
  }
  
}
