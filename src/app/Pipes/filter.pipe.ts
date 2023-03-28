import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/Category';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value)
    {
      return null;
    } 
    if(!args){
      return value;
    }
   
    return value.filter((item:any) => item.categoryName.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) !== -1 );
  }
}




