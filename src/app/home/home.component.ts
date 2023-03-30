import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  color:string='black';
  public isAvailable:boolean;
  constructor(){}
  toggleCarousel(){
    console.log("function toggle called!");
    this.isAvailable=!this.isAvailable;
  }
 }
