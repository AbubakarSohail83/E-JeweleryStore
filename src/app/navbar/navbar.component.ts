import { Component } from '@angular/core';
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
    if(this._sharedService.loggedUser==undefined)
    {
      this.userLoggedIn=false;
    }
    else{
      this.userLoggedIn=true;
    }
  }
}
