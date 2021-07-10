import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {UserModel} from './UserModel';
import { ContactModel } from './ContactModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  APIURL = 'https://contacsapp-backend.herokuapp.com/'
  constructor(private http: HttpClient) { }
  getAllUsers(){
    return this.http.get<UserModel[]>(this.APIURL+'users');
   }
   addUser(user:any){
     return this.http.post(this.APIURL+'users', user).subscribe();
   }
   deleteUserById(id:any){
     return this.http.delete(this.APIURL+'users/'+id);
   }
   getUserById(id:string){
     return this.http.get<UserModel>(this.APIURL+'users/'+id);
   }
   updateUserById(id:string, user: any){
     return this.http.patch(this.APIURL+'users/'+id, user);
   }
   addContact(contact:any, id:string){
     return this.http.post(this.APIURL+'newcontact/'+id, contact).subscribe();
   }
   getContactsById(id:any){
     return this.http.get<ContactModel[]>(this.APIURL+'tasks/'+id);
   }
   deleteContactById(id:any){
     return this.http.delete(this.APIURL+'tasks/'+id);
   }
   getContactById(id:any){
     return this.http.get<ContactModel>(this.APIURL+'taskss/'+id);
   }
   updateContactById(id: string, user: any){
     return this.http.patch(this.APIURL+'tasks/'+id, user);
   }
 
}
