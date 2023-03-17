
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/Item';

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
  

   getItem(): Observable<any> {
    const url = 'http://localhost:3000/Item';
    return this.http.get<any>(url);
  }
}
