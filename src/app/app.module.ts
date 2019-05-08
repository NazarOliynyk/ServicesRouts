import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {Route, RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { PostsComponent } from './posts/posts.component';
import { SingletodoComponent } from './singletodo/singletodo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'todos', component: TodosComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'todos/:id', component: SingletodoComponent,
      children: [
        {path: 'details', component: TodoDetailsComponent},
        {path: 'update', component: UpdateComponent}
      ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    PostsComponent,
    SingletodoComponent,
    TodoDetailsComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
