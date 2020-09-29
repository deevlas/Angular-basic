import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddToDoComponent } from './components/todo/add-to-do.component';
import { TodoList } from './components/todoList/todoList';
import {HttpClientModule} from '@angular/common/http';
import { TodoItemComponent } from './components/todo-item/todo-item.component';


@NgModule({
  declarations: [
    AppComponent,
    AddToDoComponent,
    TodoList,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
