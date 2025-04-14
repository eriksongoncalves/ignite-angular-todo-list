import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TodoModel, TodoStatus } from '../../models/todo.model'
import { EmptyMessageComponent } from '../empty-message/empty-message.component'

type UpdateStatusEmmiter = {
  status: TodoStatus
  index: number
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, EmptyMessageComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  @Input()
  todoList: TodoModel[] = []

  @Output()
  removeTodo = new EventEmitter<number>()

  @Output()
  updateStatus = new EventEmitter<UpdateStatusEmmiter>()

  handleRemoveTodo(index: number): void {
    this.removeTodo.emit(index)
  }

  handleUpdateStatus(currentStatus: TodoStatus, index: number): void {
    const status = currentStatus === 'done' ? 'pending' : 'done'

    this.updateStatus.emit({
      status,
      index
    })
  }

  get doneTodosLength(): number {
    return this.todoList.filter(todo => todo.status === 'done').length
  }

  get todoListLength(): number {
    return this.todoList.length
  }
}
