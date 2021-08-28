import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";
import {Todo} from "../model/todo.model";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  description: string = "";
  priority: string = "";
  priorityList: string[] = ["high", "medium", "low"];
  id: string | null = null;

  constructor(private todoService: TodoService,
              private router: Router,
              private activatedRoute: ActivatedRoute
             ){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      if(params.get('id')){
        this.id = params.get('id');
        if(this.id) {
          this.todoService.findTodo(this.id).subscribe(todo => {
            this.description= todo.description;
            this.priority = todo.priority
          });
        }
      }
    })
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

  update(){
    if(this.id) {
      let todo: Todo ={
        description: this.description,
        priority: this.priority,
        id: this.id
      };
      this.todoService.updateTodo(todo).subscribe(() =>{
        this.router.navigate(['/']);
      })
    }
  }
}
