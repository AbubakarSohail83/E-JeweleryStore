import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { SharedService } from 'src/app/services/shared.service';

class Item {
  name : String;
  price:number;
  category: String;
 

  constructor(nameParam:String,priceParam:number,categoryParam:String)
  {
    this.name=nameParam;
    this.category=categoryParam;
    this.price=priceParam;
  }
}



@Component({
  selector: 'app-show-list-of-items',
  templateUrl: './show-list-of-items.component.html',
  styleUrls: ['./show-list-of-items.component.css']
})
export class ShowListOfItemsComponent {
  itemCategories:Array<Category>;
  itemCategoryPics=["assets/pictures/download (1).jpeg","assets/pictures/download (2).jpeg","assets/pictures/download.jpeg"];
  title:string;

  constructor(private router: Router, public _sharedservice:SharedService, public http:HttpServiceService){
    
  }

  ngOnInit()
  {
    this.getItems();
    this.getCategories();
    this._sharedservice.filterCategoryText="";
  }
  ngOnDestroy(){
    this._sharedservice.filterCategoryText="";
    console.log("showItems destructor called");

  }

  getItems(){
    this.http.getItems().subscribe(x =>{
      console.log(x);
      this._sharedservice.items=x;
    })}

    getCategories(){
      this.http.getCategories().subscribe(x =>{
        console.log(x);
        this._sharedservice.categories=x;
      })}

  ItemCategoryClicked(category:Category)
  {
    this._sharedservice.filterCategoryText="";
    let itemsToShow:Array<Item>=[];
    this._sharedservice.items.forEach(x =>{
      if(x.category == category.categoryName)
        {itemsToShow.push(x);}

    })
    // for(let i=0;i<this._sharedservice.items.length;i++)
    // {
    //   if(this._sharedservice.items[i].category==category)
    //     itemsToShow.push(this._sharedservice.items[i]);
    // }
    let itemsString=JSON.stringify(itemsToShow);
    this.router.navigate(['/pm1/items',itemsString ]);  //
  }


  // onNotified(message:string)
  // {
  //   this.title=message;
  // }
}
