import { Component } from '@angular/core'

import { HeaderComponent } from './components/header/header.component'
import { FormNewTaskComponent } from './components/form-new-task/form-new-task.component'
import { TodoListComponent } from './components/todo-list/todo-list.component'
import { TodoModel, TodoStatus } from './models/todo.model'

type UpdateStatusEmmiter = {
  status: TodoStatus
  index: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FormNewTaskComponent, TodoListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  todoList: TodoModel[] = []

  createTodo(description: string): void {
    this.todoList.push({
      description,
      status: 'pending'
    })
  }

  removeTodo(idx: number): void {
    this.todoList.splice(idx, 1)
  }

  updateStatus(data: UpdateStatusEmmiter): void {
    this.todoList[data.index].status = data.status
  }
}
