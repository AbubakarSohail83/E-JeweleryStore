import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemFilterModuleRoutingModule } from './item-filter-module-routing.module';
import { ItemFilterPipe } from '../Pipes/item-filter.pipe';
import { ItemDetailsComponent } from '../practice-module1/components/item-details/item-details.component';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    ItemFilterPipe,
    ItemDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    ItemFilterModuleRoutingModule ,
    RouterModule.forChild([ 
       {path:'items/:items',component:ItemDetailsComponent},
      ]),
      SharedModuleModule
  ]
})
export class ItemFilterModuleModule { }
