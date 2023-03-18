import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthDashboardComponent } from '../authentication/auth-dashboard/auth-dashboard.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddItemCategoryDashboardComponent } from './components/add-item-category-dashboard/add-item-category-dashboard.component';
import { AddItemComponent } from './components/add-item/add-item.component';

const routes: Routes = [
  {path:'',redirectTo:"addCategory",pathMatch:'full'},
  {path:'addCategory',component:AddCategoryComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddItemAndCategoriesRoutingModule { }
