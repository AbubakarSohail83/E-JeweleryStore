import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { Item } from '../models/Item';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root' /*The @Injectable decorator is used to mark the class as a service that can be injected into other components. The providedIn: 'root' option specifies that the service should be provided at the root level of the application, making it a singleton.*/
})
export class SharedService {
  
  items: Array<Item>;
  categories: Array<Category>;
  loggedUser:User;
  users:Array<User>;
  loggedUserId:number;
  userLoggedIn:boolean;
  filterCategoryText:any;

constructor() {
  this.loggedUser=new User();

  const loggedUserIdString = localStorage.getItem("loggedUserId");
  if (loggedUserIdString && loggedUserIdString !== "undefined") {
    this.loggedUserId = JSON.parse(loggedUserIdString);
    this.userLoggedIn=true;
  }
  else{
    this.userLoggedIn=false;
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
