import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-form-new-task',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-new-task.component.html',
  styleUrl: './form-new-task.component.scss'
})
export class FormNewTaskComponent implements OnInit {
  formNewTask: FormGroup = new FormGroup({})

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formNewTask = this.fb.group({
      task: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  handleCreateTask() {
    console.log('>>> formNewTask', this.formNewTask.value)
  }
}
