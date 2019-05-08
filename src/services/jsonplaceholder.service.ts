import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../models/Todo';
import {Observable} from 'rxjs';
import {Post} from '../models/Post';

@Injectable({
  // in case there is not this providedIn: 'root'
  // it would be necessary to add it to app.module to tag providers
  // HTTPClientModule in app.module is necessary anyway
  providedIn: 'root'
})

// each service becomes a singlton - one object of a service-class
// which can be called anywhere where it is necessary
// otherwise it would be necessary to cteate objects of that class in every place

export class JsonplaceholderService {

  todoUrl = 'https://jsonplaceholder.typicode.com/todos';
  postUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: HttpClient
  ) { }

  // special object Observable gets info from server ang gives it to services
  getTodos(): Observable<Todo[]> {
    // this.http.post(this.url, {}); // this is for post-method
    // it gets an array of Todo objects from directory models
    return this.http.get<Todo[]>(this.todoUrl);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }

  getTodoById(id): Observable<Todo> {
    return this.http.get<Todo>(this.todoUrl + '/' + id);
  }

}
