import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user:User;
  
  constructor(public _router:Router, private _httpService:HttpServiceService)
{

}

ngOnInit()
{
  this.user=new User();
}

  onNavigateTo(id:number)
  {
    if(id==1){
      this._router.navigateByUrl('/auth/login')

    }
    
  }

  onSubmit()
  {
    this._httpService.addUser(this.user).subscribe(x=>{
      alert("Signup Successful!");
      this._router.navigateByUrl('/auth/login')
    })
  }
}

 

 
 




