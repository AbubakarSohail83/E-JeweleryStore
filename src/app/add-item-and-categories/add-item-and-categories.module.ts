import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddItemAndCategoriesRoutingModule } from './add-item-and-categories-routing.module';
import { AddItemComponent } from './components/add-item/add-item.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddItemCategoryDashboardComponent } from './components/add-item-category-dashboard/add-item-category-dashboard.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AddItemComponent,
    AddCategoryComponent,
    AddItemCategoryDashboardComponent,
  ],
  imports: [
    CommonModule,
    AddItemAndCategoriesRoutingModule,
    FormsModule,

  ]
})
export class AddItemAndCategoriesModule { }
