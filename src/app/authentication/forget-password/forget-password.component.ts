import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  constructor(public _router:Router)
  {

  }
  

  onNavigateTo(id:number)
  {
    if(id==1){
      this._router.navigateByUrl('/auth/login')

    }
    
  }
}


  
   
  