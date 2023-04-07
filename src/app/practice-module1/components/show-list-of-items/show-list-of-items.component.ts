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

  itemCategoryPics=["assets/pictures/download (1).jpeg","assets/pictures/download (2).jpeg","assets/pictures/download.jpeg"];
  title:string;
   itemsToShow:Array<Item>=[];

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
      
    })

  }

    getCategories(){

      this.http.getCategories().subscribe(x =>{

        this._sharedservice.categories=x;
        console.log(this._sharedservice.categories);
      })
    }

  ItemCategoryClicked(category:Category)
  {
    this._sharedservice.filterCategoryText="";
    this.http.getItemsOnCategory(category.categoryName).subscribe(x=>{
      this.itemsToShow=x;
      console.log(x);
      console.log(this.itemsToShow);
      let itemsString=JSON.stringify(this.itemsToShow);
      this.router.navigate(['/pm1/items',itemsString ]);  
    })

  }     

}
