import { Component, OnInit } from '@angular/core';
import {JsonplaceholderService} from '../../services/jsonplaceholder.service';
import {Todo} from '../../models/Todo';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  constructor(
    private jsphService: JsonplaceholderService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // this activatedRoute works with goToTodos() from singletodo.component.ts
    // it takes the object from queryParam
    this.activatedRoute.queryParams.subscribe((data) => {
      console.log(data);
    });
    this.jsphService.getTodos().subscribe((todos) => {
        this.todos = todos;
    });
  }

}
