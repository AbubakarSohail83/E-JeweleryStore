import { Component } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { Item } from 'src/app/models/Item';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  public addCategory:Category;
  constructor(private _httpService:HttpServiceService){
  
  }

  ngOnInit()
  {
    this.addCategory=new Category();
    
  }
  
  saveCategory(){
    var date=new Date();
    this.addCategory.createdOn=date;
    this._httpService.addCategory(this.addCategory).subscribe(x=>{
      alert("Category added successfully!");
    });
  }
}
