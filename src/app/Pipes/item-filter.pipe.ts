import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemFilter'
})
export class ItemFilterPipe implements PipeTransform {

  transform(value: any, args? :any): any {
   
    if(!value)
      return null;
    if(!args)
    {
      return value;
    }
   
    return value.filter((item:any) => {
      const nameMatch = item.name.toLocaleLowerCase().indexOf(args) !== -1;
      const priceMatch = item.price.toString().toLocaleLowerCase().indexOf(args) !==-1;
      return nameMatch || priceMatch;
    });
  }

}
