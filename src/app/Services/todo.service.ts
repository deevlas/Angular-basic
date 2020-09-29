import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodoList(): Observable<any[]>{
    return this.http.get<any[]>('https://todolist-e5e03.firebaseio.com/tdl.json');
  }
}


