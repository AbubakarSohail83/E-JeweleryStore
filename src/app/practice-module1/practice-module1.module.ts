import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeModule1RoutingModule } from './practice-module1-routing.module';
import { ShowListOfItemsComponent } from './components/show-list-of-items/show-list-of-items.component';
import { Pm1DashboardComponent } from './components/pm1-dashboard/pm1-dashboard.component';
import { ItemCompComponent } from './components/item-comp/item-comp.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { FilterPipe } from '../Pipes/filter.pipe';
import { ItemFilterPipe } from '../Pipes/item-filter.pipe';


@NgModule({
  declarations: [
    ShowListOfItemsComponent,
    Pm1DashboardComponent,
    ItemCompComponent,
    ItemDetailsComponent,
    FilterPipe,
    ItemFilterPipe
  ],
  imports: [
    CommonModule,
    PracticeModule1RoutingModule
  ]
})
export class PracticeModule1Module { }
