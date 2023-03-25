import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { Item } from '../models/Item';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  items: Array<Item>;
  categories: Array<Category>;
  loggedUser:User;
  users:Array<User>;
  loggedUserId:number;


constructor() {
  this.loggedUser=new User();

  const loggedUserIdString = localStorage.getItem("loggedUserId");
  if (loggedUserIdString && loggedUserIdString !== "undefined") {
    this.loggedUserId = JSON.parse(loggedUserIdString);
  }

  const loggedUserEmailString = localStorage.getItem("loggedUserEmail");
  if (loggedUserEmailString && loggedUserEmailString !== "undefined") {
    this.loggedUser.email = (loggedUserEmailString);
  }

  const loggedUserPasswordString = localStorage.getItem("loggedUserPassword");
  if (loggedUserPasswordString && loggedUserPasswordString !== "undefined") {
    this.loggedUser.password =(loggedUserPasswordString);
  }


}

}
