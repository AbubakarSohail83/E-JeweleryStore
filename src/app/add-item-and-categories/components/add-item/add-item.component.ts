import { Component } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { Item } from 'src/app/models/Item';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { SharedService } from 'src/app/services/shared.service';
import { NgSelectOption } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  
})
export class AddItemComponent {
  public item:Item;

  constructor(private _httpService:HttpServiceService, public _sharedService:SharedService){
  }

  ngOnInit()
  {
    this.item=new Item();
    this.getCategories();
    this.getItems();
  }
  getCategories(){
    this._httpService.getCategories().subscribe(x =>{   
    this._sharedService.categories=x;
    })
  }

  getItems()
  {
    this._httpService.getItems().subscribe(x=>{
      this._sharedService.items=x;
    })
  }
onSave()
{
  console.log(this.item.category);
  this._httpService.addItem(this.item).subscribe(x=>{
    this.getItems();
    alert("Item added successfully");
  })
}
// onCategorySelect(event:Event){
//   const selectedValue = (event.target as HTMLSelectElement).value;
//   this.item.category=selectedValue;
// }

ViewItem(item:Item)
{

}

UpdateItem(item:Item)
{
  this.item=item;
}

DeleteItem(item:Item)
{
  this._httpService.deleteItem(item.id).subscribe(
    x=>{
      let idx=this._sharedService.items.findIndex(x=>x.id==item.id);
      this._sharedService.items.splice(idx,1);
      
      alert("Item Deleteed Successfully");
      
    }
  )
}
onUpdateItem()
{
  this._httpService.putItem(this.item).subscribe(x=>{
    alert("Item Updated Successfully.");
    var idx=this._sharedService.items.findIndex(x=>x.id==this.item.id);
    this._sharedService.items[idx]=this.item;
  })
}

checkValidation()
{
  alert("Item Credentials are not valid!!");
}


}
