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
    this.getUsers();
   
  };
    

  getUsers()
  {
    this._httpService.getUser().subscribe(x=>{
      this._sharedService.users=x;
    })
  }

  onLogin()
  {
    let index= this._sharedService.users.findIndex(x=>{
      return x.email==this.user.email && x.password== this.user.password;
    })
    if(index==-1)
    {
      alert("Invalid Email or Password!");
    }
    else{
      localStorage.clear();
      localStorage.setItem(this._sharedService.users[index].email,this._sharedService.users[index].password);
      this._sharedService.loggedUserId=this._sharedService.users[index].id;
      this._router.navigateByUrl('/home');
    }
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






















