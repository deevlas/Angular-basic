import {Component, Output} from '@angular/core';
import { TodoService } from './Services/todo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: any[] = [];
  title = 'todoList';

 constructor(private ToDoService: TodoService) {
   this.ToDoService.getTodoList().subscribe(data => {
     for(const item in data) {
       this.todos.push({...data[item], id: item});
     }
   });
   console.log(this.todos);
    }

}
