export type TodoStatus = 'pending' | 'done'

export type TodoModel = {
  description: string
  status: TodoStatus
}
