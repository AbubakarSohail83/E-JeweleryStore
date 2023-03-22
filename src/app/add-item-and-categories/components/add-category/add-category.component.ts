import { Component } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { Item } from 'src/app/models/Item';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { SharedService } from 'src/app/services/shared.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  public addCategory:Category;
  
  constructor(private _httpService:HttpServiceService, public _sharedservice:SharedService, private router:Router){
  
  }
  

  ngOnInit()
  {
    this.addCategory=new Category();
    this.getCategories();

  }


  getCategories(){
    this._httpService.getCategories().subscribe(x =>{
 
      this._sharedservice.categories=x;
    })}
  
  saveCategory(){
    var date=new Date();
    this.addCategory.createdOn=date;
    this._httpService.addCategory(this.addCategory).subscribe(x=>{
      this._sharedservice.categories.push(this.addCategory);
      alert("Category added successfully!");
    });
  }

  updateCategory(category:Category)
  {
    this.addCategory=category;
  }

  deleteCategory(category:Category)
  {
    this.addCategory
    this._httpService.deleteCategory(category).subscribe(x=>{
      alert("Delete Method Worked!");
      let idx=this._sharedservice.categories.findIndex(x=>x.id==category.id);
      this._sharedservice.categories.splice(idx,1);
    });

  }


  onUpdateCategory(){
    console.log(this.addCategory.id);
    this._httpService.putCategories(this.addCategory).subscribe(x=>{
     alert("Put Method Worked!");
      var idx=this._sharedservice.categories.findIndex(x=>x.id==this.addCategory.id);

      this._sharedservice.categories[idx]=this.addCategory;
    });
  }

  checkValidation()
  {
    alert("Input field required");
  }

}
