import { Component } from '@angular/core'

import { HeaderComponent } from './components/header/header.component'
import { FormNewTaskComponent } from './components/form-new-task/form-new-task.component'
import { TodoListComponent } from './components/todo-list/todo-list.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FormNewTaskComponent, TodoListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
