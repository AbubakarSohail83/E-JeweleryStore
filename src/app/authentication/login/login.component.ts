import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(public _router:Router)
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






















