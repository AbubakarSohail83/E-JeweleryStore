import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArrays'
})
export class SortArraysPipe implements PipeTransform {

  transform(value: any, args? :any):any {
    return value.sort((a:any,b:any)=>{
     let x=a.price;
     let y=b.price;
     if (x<y) {
       return -1;
     }else {
       return 1;
     }
     return 0;
    });
   }
}
