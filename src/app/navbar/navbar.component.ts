import { ChangeDetectorRef, Component } from '@angular/core';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { User } from '../models/User';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  
  constructor(public _sharedService:SharedService){
  }

  ngOnInit()
  {
    this.login();
  }

  login()
  {
    console.log(this._sharedService.loggedUserId);

    if(this._sharedService.userLoggedIn==false )
    {
      this._sharedService.userLoggedIn=false;
    }
    else{
      this._sharedService.userLoggedIn=true;
    }
  }

  logout(){
   
    localStorage.clear();
    this._sharedService.userLoggedIn=false;
 
    
  }
}
