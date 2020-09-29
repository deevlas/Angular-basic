import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'todoList',
  templateUrl: './todoList.html',
  styleUrls: ['./todoList.css']
})
export class TodoList implements OnInit {

  @Input() todos: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
