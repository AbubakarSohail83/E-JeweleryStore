import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from 'src/app/models/User';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:User;

  constructor(public _router:Router, private _httpService:HttpServiceService)
  {
    
  }

  ngOnInit() {
    this.user=new User();  
  };
    



  onLogin()
  {

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






















