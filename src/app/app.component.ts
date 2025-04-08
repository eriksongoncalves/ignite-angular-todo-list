import { Component } from '@angular/core'

import { HeaderComponent } from './components/header/header.component'
import { FormNewTaskComponent } from './components/form-new-task/form-new-task.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FormNewTaskComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
