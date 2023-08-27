export interface Todo {
  id: string;
  todo: string;
  isCompleted: boolean;
}

export interface CreateTodo {
  id?: string;
  todo?: string;
  isCompleted?: boolean;
}
