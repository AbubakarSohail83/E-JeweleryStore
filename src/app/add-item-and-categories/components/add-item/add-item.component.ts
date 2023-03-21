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
      this._httpService.getCategories().subscribe(x =>{
      this._sharedService.categories=x;
    });
  }

onSubmit()
{

}
onCategorySelect(categorySelected:any){
this.item.category=categorySelected;
}

}
