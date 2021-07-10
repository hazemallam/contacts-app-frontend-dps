import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../UserModel';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: UserModel[] = [];
  constructor(private usersService:UsersService, private router: Router) {
    this.getAll()
   }
  getAll(){
    this.usersService.getAllUsers().subscribe(
      data => this.users = data
    );
  }

  deleteUser(id:any){
    this.usersService.deleteUserById(id).subscribe();
    this.router.navigateByUrl('/del', {skipLocationChange: true}).then(()=> this.router.navigate(['']))
  }

  ngOnInit(): void {
    this.getAll()
  }

}
