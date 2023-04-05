
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

  // headers = new().set('Content-Type', 'aplication/json').set('Accept','aplication/json');
  // httpOptions = {
  //   headers: this.headers
  // }
  constructor(private http: HttpClient )  { }
  
  addItem(item:Item): Observable<any> {
   // const url = 'http://localhost:3000/Item';
   const url = 'https://localhost:44378/api/AddItem';
    return this.http.post<any>(url,item);
  }
  
  addCategory(category:Category): Observable<any> {
    //const url = 'http://localhost:3000/Category';
    const url = 'https://localhost:44378/api/addCategory';

    return this.http.post<any>(url,category);
  }
  
   

  getCategories(): Observable<any> {
    //const url = 'http://localhost:3000/Category';
    const url="https://localhost:44378/api/GetCategories";
    return this.http.get<any>(url);
  }
  getItems():Observable<any>{
    //const url='http://localhost:3000/Item';
    const url="https://localhost:44378/api/GetItems";
    return this.http.get<any>(url);

  }

  putCategories(category:Category): Observable<any> {
    const url = 'https://localhost:44378/api/updateCategory';
    const _url = `${url}/${category.id}`;
    return this.http.put<any>(_url,category);
  }

  putItem(item:Item):Observable<any>{
    //const url = 'http://localhost:3000/Item';
    const url = 'https://localhost:44378/api/UpdateItem';
    const _url = `${url}/${item.id}`;
    return this.http.put<any>(_url,item);
  }



  deleteCategory(category: Category): Observable<any> {
    const url = 'https://localhost:44378/api/deleteCategory';
    const _url = `${url}/${category.id}`;
    return this.http.delete<any>(_url);
  }

  deleteItem(itemId:number)
  {
    //const url='http://localhost:3000/Item/';
    const url = 'https://localhost:44378/api/DeleteItem';
    const _url = `${url}/${itemId}`;
    return this.http.delete<any>(_url);

  }


  addUser(user:User):Observable<any>
  {
    //const url='http://localhost:3000/Users/'; 
    const url="https://localhost:44378/api/AddUser";
    return this.http.post<any>(url,user);
  }

  getUser(): Observable<any> {
    const url = 'https://localhost:44378/api/GetUsers';
    return this.http.get<any>(url);
  }

  putUser(user:User):Observable<any>{
    //const url = 'http://localhost:3000/Users';
    const url = 'https://localhost:44378/api/PutUser';
    const _url = `${url}/${user.id}`;
    return this.http.put<any>(_url,user);
  }
}
