import { Injectable } from '@angular/core';
import { Item } from '../models/Item';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  items: Array<Item>=[
    {name :"Ring" ,price :  234,category : "GoldPlated"},
    {name:"Necklace",price:333, category:"GoldPlated"},
    {name:"Ruby",price:10000,category:"Stones"},
     {name:"Zircon",price:23,category:"Stones"},
    {name:"Pearl",price:10101010,category:"Stones"}
  ];
  
  constructor() { }
}
