import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { SortArraysPipe } from '../Pipes/sort-arrays.pipe';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SortArraysPipe
  ],
  imports: [
    CommonModule,
    SharedModuleRoutingModule
  ]
  
})
export class SharedModuleModule { }
