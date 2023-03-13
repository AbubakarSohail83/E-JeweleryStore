import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { Pm1DashboardComponent } from './components/pm1-dashboard/pm1-dashboard.component';
import { ShowListOfItemsComponent } from './components/show-list-of-items/show-list-of-items.component';

const routes: Routes = [
  { path: '',  redirectTo: 'showItems',  pathMatch: 'full'},
  
  {path:'',component:Pm1DashboardComponent},
  {path:'showItems',component:ShowListOfItemsComponent}, 
  {path:'itemDetails/ :id',component:ItemDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeModule1RoutingModule { }
