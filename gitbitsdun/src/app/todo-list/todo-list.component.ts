import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";
import {Todo} from "../model/todo.model";
import {Subscription, timer} from "rxjs";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: Todo[] = [];
  randomSelection: number = -1;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe(data => {
      this.todoList = data;
      console.log(this.todoList);
    })
  }

  selectARandomTodo(): void{
     this.randomSelection = Math.floor(Math.random()*(this.todoList.length));
     this.countdown(this.todoList[this.randomSelection]);
  }

  countdown(todo: Todo){
    let counter = 1800;
    const tick = 1000;
    timer(0, tick).subscribe(() =>{ -- counter; todo.timer = counter;});
  }

  formatTime(seconds: number): string{

    const minutes: number = Math.floor(seconds / 60);
    return (
      ("00" + minutes).slice(-2) +
      ":" +
      ("00" + Math.floor(seconds - minutes * 60)).slice(-2)
    );
  }


}
