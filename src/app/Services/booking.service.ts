import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  movies_list:any

  constructor(public http : HttpClient) { }

searchlocation(userdata:any){
  return this.http.post('http://localhost:9000/location/searchlocation' , userdata)
}
searchmovie(userdata:any){
  return this.http.post('http://localhost:9000/movie/searchmovie', userdata)
}

getmovies(location:any){
  return this.http.get('http://localhost:9000/movie/getmovie/'+location)
}

searchtheater(userdata:any){
  return this.http.post('http://localhost:9000/theater/searchtheater' , userdata)
}

gettheaters(movie:any){
  return this.http.get('http://localhost:9000/theater/gettheater/'+ movie )
}


getmovielist(){
  console.log(this.movies_list)
  return this.movies_list
}

setmovielist(obj:any){

  this.movies_list=obj
}

}
