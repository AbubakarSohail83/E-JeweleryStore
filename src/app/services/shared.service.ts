import { Injectable } from '@angular/core';
import { Item } from '../models/Item';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  items: Array<Item>;
  
  constructor() { }
}
