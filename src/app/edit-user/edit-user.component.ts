import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../UserModel';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: UserModel={_id:'', name:'', age:0 ,password:'', email:''};
  constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.getUser()
  }
  getUser(){
    const id= this.route.snapshot.params.id;
    this.usersService.getUserById(id).subscribe(data => this.user = data)
  }
  editMyUser(myUpdatedData:any){
    const id = this.route.snapshot.params.id;
    this.usersService.getUserById(id).subscribe(
      data => {
        this.user = data
        this.usersService.updateUserById(id, myUpdatedData).subscribe()
      }
      
      
    )
    
    console.log(this.user)
    this.router.navigate([''])
      console.log()
  }

}
