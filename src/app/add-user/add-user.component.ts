import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) { }

  addMyUser(values:any){
    this.usersService.addUser(values);
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
