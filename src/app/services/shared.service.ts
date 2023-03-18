import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { Item } from '../models/Item';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  items: Array<Item>;
  categories: Array<Category>;
  
  constructor() { }
}
