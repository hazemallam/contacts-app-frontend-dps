import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactModel } from '../ContactModel';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  user: ContactModel = {_id:"", address:"", mobile:0, phone:0, userID:""};
  constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute) { }

  getContact(){
    const id= this.route.snapshot.params.id;
    this.usersService.getContactById(id).subscribe(data => this.user = data)
  }

  ngOnInit(): void {
    this.getContact()
  }

  editMyContact(myUpdatedData:any){
    const id = this.route.snapshot.params.id;
    this.usersService.getContactById(id).subscribe(
      data => {
        this.user = data
        this.usersService.updateContactById(id, myUpdatedData).subscribe()
      }
      
      
    )
    
    console.log(this.user)
  
    this.router.navigate([''])
      
  }

}
