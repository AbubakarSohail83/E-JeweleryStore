
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/Item';
import { Category } from '../models/Category';

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
  
   getItem(): Observable<any> {
    const url = 'http://localhost:3000/Item';
    return this.http.get<any>(url);
  }

  getCategories(): Observable<any> {
    const url = 'http://localhost:3000/Category';
    return this.http.get<any>(url);
  }

  putCategories(category:Category): Observable<any> {
    const url = 'http://localhost:3000/Category';

    const _url = `${url}/${category.id}`;
    return this.http.put<any>(_url,category);
  }

  deleteCategory(category:Category):Observable<any>
  {
    const url='http://localhost:3000/Category/';
    
    return this.http.delete<any>(url+category.id);
  }
}
