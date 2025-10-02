import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AppComponent } from './app.component'
import { TodoModel } from './models/todo.model'

const mockTodoItems: TodoModel[] = [
  {
    description: 'Task 1',
    status: 'pending'
  },
  {
    description: 'Task 2',
    status: 'pending'
  }
]

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance

    component.todoList = [...mockTodoItems]
    fixture.detectChanges()
  })

  it('should render the component', () => {
    expect(component).toBeTruthy()
  })

  it('should create todo', () => {
    component.createTodo('task 3')

    expect(component.todoList.length).toEqual(3)
  })

  it('should update status todo', () => {
    component.updateStatus({
      index: 0,
      status: 'done'
    })

    expect(component.todoList[0].status).toBe('done')
  })

  it('should remove todo', () => {
    component.removeTodo(1)

    expect(component.todoList.length).toEqual(1)
  })
})
