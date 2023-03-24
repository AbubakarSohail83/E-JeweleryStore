import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { findIndex } from 'rxjs';
import { User } from 'src/app/models/User';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:User;

  constructor(public _router:Router, private _httpService:HttpServiceService, public _sharedService:SharedService)
  {
    
  }

  ngOnInit() {
    this.user=new User();  
  };
    

  getUsers()
  {
    this._httpService.getUser().subscribe(x=>{
      this._sharedService.users=x;
    })
  }

  onLogin()
  {
    this._sharedService.users.findIndex(x=>{
      x.email==this.user.email;
    })
  }

  onnaviagteto(id:number)
  {
    if(id==1){
      this._router.navigateByUrl('/auth/forgetPassword')

    }
    else{
      this._router.navigateByUrl('/auth/signup')

    }

  }
}






















