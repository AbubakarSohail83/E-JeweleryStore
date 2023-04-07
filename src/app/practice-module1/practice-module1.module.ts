import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeModule1RoutingModule } from './practice-module1-routing.module';
import { ShowListOfItemsComponent } from './components/show-list-of-items/show-list-of-items.component';
import { Pm1DashboardComponent } from './components/pm1-dashboard/pm1-dashboard.component';
import { ItemCompComponent } from './components/item-comp/item-comp.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { FilterPipe } from '../Pipes/filter.pipe';
import { SearchHighlightDirective } from '../Directives/search-highlight.directive';
import { ItemFilterModuleModule } from '../item-filter-module/item-filter-module.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    ShowListOfItemsComponent,
    Pm1DashboardComponent,
    ItemCompComponent,
    
    FilterPipe,

    SearchHighlightDirective
  ],
  imports: [
    CommonModule,
    PracticeModule1RoutingModule,
    ItemFilterModuleModule,
    SharedModuleModule
  ]
})
export class PracticeModule1Module { }
