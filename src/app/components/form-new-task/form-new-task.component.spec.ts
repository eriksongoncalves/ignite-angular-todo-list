import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

import { FormNewTaskComponent } from './form-new-task.component'

describe('FormNewTaskComponent', () => {
  let component: FormNewTaskComponent
  let fixture: ComponentFixture<FormNewTaskComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNewTaskComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(FormNewTaskComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should show a message when input field is required', () => {
    component.descriptionControl?.markAsTouched()
    component.descriptionControl?.markAsDirty()

    fixture.detectChanges()

    const errorElement = fixture.debugElement.query(By.css('.input-error-message'))
      .nativeElement as HTMLSpanElement

    expect(errorElement.textContent).toBe('Campo obrigatório')
  })

  it('should show a message when input field length is less than 3', () => {
    component.descriptionControl?.setValue('aa')
    component.descriptionControl?.markAsTouched()

    fixture.detectChanges()

    const errorElement = fixture.debugElement.query(By.css('.input-error-message'))
      .nativeElement as HTMLSpanElement

    expect(errorElement.textContent).toBe('O campo deve conter pelo menos 3 caracteres')
  })

  it('should add filled class in input field', () => {
    component.descriptionControl?.setValue('aaa')
    component.descriptionControl?.markAsTouched()

    fixture.detectChanges()

    const inputElement = fixture.nativeElement.querySelector('input') as HTMLInputElement

    expect(inputElement.classList.contains('filled')).toBeTrue()
  })

  it('should disable the button when form is invalid', () => {
    component.descriptionControl?.setValue('a')
    component.descriptionControl?.markAsTouched()

    fixture.detectChanges()

    const buttonElement = fixture.nativeElement.querySelector('button') as HTMLButtonElement

    expect(buttonElement.hasAttribute('disabled')).toBeTrue()
  })

  it('should enable the button when form is valid', () => {
    component.descriptionControl?.setValue('aaa')
    component.descriptionControl?.markAsTouched()

    fixture.detectChanges()

    const buttonElement = fixture.nativeElement.querySelector('button') as HTMLButtonElement

    expect(buttonElement.hasAttribute('disabled')).toBeFalse()
  })

  it('should emit a task', () => {
    component.descriptionControl?.setValue('aaa')
    component.descriptionControl?.markAsTouched()

    fixture.detectChanges()

    spyOn(component.createTodoSubmit, 'emit')

    const buttonElement = fixture.nativeElement.querySelector('button') as HTMLButtonElement

    buttonElement.click()

    expect(component.createTodoSubmit.emit).toHaveBeenCalledWith('aaa')

    fixture.detectChanges()

    expect(component.descriptionControl?.value).toBeNull()
  })
})
