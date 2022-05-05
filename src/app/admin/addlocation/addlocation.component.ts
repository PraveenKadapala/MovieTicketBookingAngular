import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.css']
})
export class AddlocationComponent implements OnInit {

  
  addlocationform= new FormGroup({
    location : new FormControl('')
  })

  constructor(public adminservice:AdminService,public router:Router) { }

  addlocation(){
    
    this.adminservice.addlocation(this.addlocationform.value).subscribe({next:(res) =>{ 

      if(res && res['status']=='ok'){
        console.log(res)
      }
    }
  })
}
  ngOnInit(): void {
  }

  get location(){
    return this.addlocationform.get('location')
  }

}
