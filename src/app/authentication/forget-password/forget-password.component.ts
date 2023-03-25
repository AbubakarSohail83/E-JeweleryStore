import { Xliff } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { findIndex } from 'rxjs';
import { User } from 'src/app/models/User';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  
  user:User;

  
  showPassword:boolean=false;


  constructor(public _router:Router, private _httpService:HttpServiceService, public _sharedService:SharedService)
  {

  }
  

  onNavigateTo(id:number)
  {
    if(id==1){
      this._router.navigateByUrl('/auth/login')

    }
    
  }
  getUsers(){
   this._httpService.getUser().subscribe(x=>{
      this._sharedService.users=x;
    });
  }

  findUser():User{

    let index= this._sharedService.users.findIndex(x=>{
      return x.email==this.user.email;
    })
    
  
    return this._sharedService.users[index];
    
  }

    checkEmail()
    {
      let tempUser=this.findUser();
      if(tempUser==undefined)
      {
        alert("Invalid Email!");
      }
      else{
        this.user.id=tempUser.id;
        this.showPassword=true;
      }
    }



  ngOnInit(){
    this.user=new User();
   this.getUsers();
  }



  changePassword(){
    console.log(this.user);

    this._httpService.putUser(this.user).subscribe(x=>{
      alert("Password Changed Successfully! Go to login page.");
      
    })
  }
}


  
   
  