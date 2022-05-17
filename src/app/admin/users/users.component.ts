import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any=[]
  constructor(private adminservice:AdminService) { }

  ondelete(){
    
  }
  ngOnInit(): void {
    this.adminservice.allusers().subscribe({next:(res:any)=>{
      console.log(res)
      this.users=res
      console.log(this.users)
    }})
  }

}
