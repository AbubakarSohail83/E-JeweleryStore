import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { Item } from '../models/Item';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  items: Array<Item>;
  categories: Array<Category>;
  currUser:User;
  users:Array<User>;
  constructor() { }
}
