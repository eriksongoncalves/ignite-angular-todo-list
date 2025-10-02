import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TodoListComponent } from './todo-list.component'
import { TodoModel } from '../../models/todo.model'

const mockTodoItems: TodoModel[] = [
  {
    description: 'Task 1',
    status: 'done'
  },
  {
    description: 'Task 2',
    status: 'pending'
  }
]

describe('TodoListComponent', () => {
  let component: TodoListComponent
  let fixture: ComponentFixture<TodoListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TodoListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should show an empty message when todo list is empty', () => {
    component.todoList = []

    fixture.detectChanges()

    const emptyTitleElement = fixture.nativeElement.querySelector('h4') as HTMLTitleElement

    expect(emptyTitleElement.textContent).toBe('Você ainda não tem tarefas cadastradas')
  })

  it('should show a list of todo list with 2 items', () => {
    component.todoList = mockTodoItems

    fixture.detectChanges()

    const summaryElement = fixture.nativeElement.querySelector('.summary') as HTMLDivElement
    const summaryTextsElements = summaryElement.querySelectorAll('p') as NodeList
    const ulListElement = fixture.nativeElement.querySelector('ul') as HTMLUListElement
    const liCollectionElements = ulListElement.getElementsByTagName('li') as HTMLCollection

    expect(liCollectionElements.length).toBe(2)
    expect(summaryTextsElements[0].textContent).toBe('Tarefas criadas 2')
    expect(summaryTextsElements[1].textContent).toBe('Concluídas 1 de 2')
  })

  it('should update status from item', () => {
    component.todoList = mockTodoItems

    spyOn(component.updateStatus, 'emit')

    fixture.detectChanges()

    const ulListElement = fixture.nativeElement.querySelector('ul') as HTMLUListElement
    const liCollectionElements = ulListElement.getElementsByTagName('li') as HTMLCollection

    const radioDoneElement = liCollectionElements[0].querySelector('input') as HTMLInputElement
    const radioPendingElement = liCollectionElements[1].querySelector('input') as HTMLInputElement

    radioDoneElement.click()

    expect(component.updateStatus.emit).toHaveBeenCalledWith({
      status: 'pending',
      index: 0
    })

    radioPendingElement.click()

    expect(component.updateStatus.emit).toHaveBeenCalledWith({
      status: 'done',
      index: 1
    })
  })

  it('should remove an item', () => {
    component.todoList = mockTodoItems

    spyOn(component.removeTodo, 'emit')

    fixture.detectChanges()

    const ulListElement = fixture.nativeElement.querySelector('ul') as HTMLUListElement
    const liCollectionElements = ulListElement.getElementsByTagName('li') as HTMLCollection

    const trashElement = liCollectionElements[0].querySelector('button') as HTMLButtonElement

    trashElement.click()

    expect(component.removeTodo.emit).toHaveBeenCalledWith(0)
  })
})
