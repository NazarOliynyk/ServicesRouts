import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JsonplaceholderService} from '../../services/jsonplaceholder.service';
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-singletodo',
  templateUrl: './singletodo.component.html',
  styleUrls: ['./singletodo.component.css']
})
export class SingletodoComponent implements OnInit {

  todo: Todo = new Todo();
  // adding new Todo(); allows us to avoid *ngIf='todo' in html
  constructor(
    private activatedRoute: ActivatedRoute,
    private jsphService: JsonplaceholderService,
    private router: Router
  ) { }

  // ngOnInit() {
  //   console.log(this.activatedRoute.snapshot.params);
  //   // it works with snapshot but the way below with params way is better
  //   // const id = this.activatedRoute.snapshot.params.id;
  //
  //    this.activatedRoute.params.subscribe((params) => {
  //      const id = params.id;
  //      this.jsphService.getTodoById(id).subscribe((todo) => {
  //        console.log(todo);
  //        this.todo = todo;
  //     });
  //   });
  // }

  ngOnInit() {
    // it works when [queryParams]="todo" is added in todos.component.html
    // and it allows to send the whole object
    this.activatedRoute.queryParams.subscribe((p) => {
      this.todo = <Todo>p;
    });
  }

  goToTodos() {
    // all url-address must be given here, text: 'hello!' goes to url during calling that button

    this.router.navigate(['todos'],
      {queryParams: {text: 'hello!',
        obj: JSON.stringify({title: 'xxx'}) // objects must be in JSON wrapper
        }                                        // because it is send throug url string
      }
      );
  }
}
