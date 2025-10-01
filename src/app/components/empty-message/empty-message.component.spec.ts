import { ComponentFixture, TestBed } from '@angular/core/testing'

import { EmptyMessageComponent } from './empty-message.component'
import { By } from '@angular/platform-browser'

describe('EmptyMessageComponent', () => {
  let component: EmptyMessageComponent
  let fixture: ComponentFixture<EmptyMessageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyMessageComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(EmptyMessageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should contain the correct message', () => {
    const h4Element = fixture.debugElement.query(By.css('h4')).nativeElement as HTMLTitleElement
    const pElement = fixture.debugElement.query(By.css('p')).nativeElement as HTMLParagraphElement

    expect(h4Element.textContent).toBe('Você ainda não tem tarefas cadastradas')
    expect(pElement.textContent).toBe('Crie tarefas e organize seus itens a fazer')
  })
})
