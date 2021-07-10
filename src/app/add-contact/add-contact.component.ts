import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UsersService} from './../users.service';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  addMyContact(values:any){
    console.log(values)
    const id = this.route.snapshot.params.id;
    this.userService.addContact(values, id);
    this.router.navigate([id]);
  }


}
