import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "./model/todo.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl: string ="http://localhost:8080/api/todos";

  constructor(private httpClient: HttpClient) {
  }

  getTodoList(): Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(this.baseUrl);
  }

  createTodo(todo: Todo): Observable<any>{
    return this.httpClient.post(this.baseUrl, todo);
  }

  updateTodo(todo: Todo): Observable<any>{
    return this.httpClient.put(this.baseUrl +`/${todo.id}`, todo);
  }

  findTodo(id: string): Observable<Todo>{
    return this.httpClient.get<Todo>(this.baseUrl +`/${id}`);
  }
}
