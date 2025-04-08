import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core'
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-form-new-task',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-new-task.component.html',
  styleUrl: './form-new-task.component.scss'
})
export class FormNewTaskComponent implements OnInit {
  @ViewChild('descriptionInput') descriptionInput!: ElementRef

  formNewTodo: FormGroup = new FormGroup({})

  @Output()
  createTodoSubmit = new EventEmitter<string>()

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formNewTodo = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  get descriptionControl(): AbstractControl | null {
    return this.formNewTodo.get('description')
  }

  handleCreateTodo(): void {
    const todoDescription = this.formNewTodo.value.description
    this.createTodoSubmit.emit(todoDescription)
    this.formNewTodo.reset()
    this.descriptionInput.nativeElement.blur()
  }
}
