import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

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

 

 
 




