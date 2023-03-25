import { Component } from '@angular/core';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  userLoggedIn:boolean;

  constructor(public _sharedService:SharedService){

  }

  ngOnInit()
  {
    this.login();
  }

  login()
  {
    if(this._sharedService.loggedUserId==undefined)
    {
      this.userLoggedIn=false;
    }
    else{
      this.userLoggedIn=true;
    }
  }

  logout(){
   
    localStorage.clear();
    this.userLoggedIn=false;

  }
}
