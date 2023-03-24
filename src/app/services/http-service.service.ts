
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/Item';
import { Category } from '../models/Category';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  Url:any;


  constructor(private http: HttpClient )  { }
  
  addItem(item:Item): Observable<any> {
    const url = 'http://localhost:3000/Item';
    return this.http.post<any>(url,item);
  }
  
  addCategory(category:Category): Observable<any> {
    const url = 'http://localhost:3000/Category';
    return this.http.post<any>(url,category);
  }
  
  

  getCategories(): Observable<any> {
    const url = 'http://localhost:3000/Category';
    return this.http.get<any>(url);
  }
  getItems():Observable<any>{
    const url='http://localhost:3000/Item';
    return this.http.get<any>(url);

  }

  putCategories(category:Category): Observable<any> {
    const url = 'http://localhost:3000/Category';

    const _url = `${url}/${category.id}`;
    return this.http.put<any>(_url,category);
  }

  putItem(item:Item):Observable<any>{
    const url = 'http://localhost:3000/Item';
    const _url = `${url}/${item.id}`;
    return this.http.put<any>(_url,item);
  }



  deleteCategory(category:Category):Observable<any>
  {
    const url='http://localhost:3000/Category/';
    
    return this.http.delete<any>(url+category.id);
  }

  deleteItem(itemId:number)
  {
    const url='http://localhost:3000/Item/';
    return this.http.delete<any>(url+itemId);
  }


  addUser(user:User):Observable<any>
  {
    const url='http://localhost:3000/Users/';  
    return this.http.post<any>(url,user);
  }

  getUser(): Observable<any> {
    const url = 'http://localhost:3000/Users';
    return this.http.get<any>(url);
  }

  putUser(user:User):Observable<any>{
    const url = 'http://localhost:3000/Users';
    const _url = `${url}/${user.id}`;
    return this.http.put<any>(_url,user);
  }
}
