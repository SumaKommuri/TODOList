import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";
import {Todo} from "../model/todo.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  description: string = "";
  priority: string = "";

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
  }

  add(){
    let todo: Todo ={
      description: this.description,
      priority: this.priority
    };
    this.todoService.createTodo(todo).subscribe(() =>{
      this.router.navigate(['/']);
    })
  }
}
