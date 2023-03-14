import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  itemCategories=["Stones","GoldPlated","Artificial"];
  itemCategoryPics=["assets/pictures/download (1).jpeg","assets/pictures/download (2).jpeg","assets/pictures/download.jpeg"];
  title:string;
  items:Item[]=[
    new Item("Ring",234,"GoldPlated"),new Item("Necklace",333,"GoldPlated"),new Item("Ruby",10000,"Stones"), new Item("Zircon",23,"Stones"), new Item("Pearl",10101010,"Stones")
  ];
  
  constructor(private router: Router){

  }

  ngOnInit()
  {
  }

  ItemCategoryClicked(category:string)
  {
    let itemsToShow:Item[]=[];
    for(let i=0;i<this.items.length;i++)
    {
      if(this.items[i].category==category)
        itemsToShow.push(this.items[i]);
    }
    let itemsString=JSON.stringify(itemsToShow);
    this.router.navigate(['/pm1/items',itemsString ]);  //
  }


  // onNotified(message:string)
  // {
  //   this.title=message;
  // }
}
