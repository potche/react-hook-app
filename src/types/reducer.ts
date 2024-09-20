export type Todo = {
  id?: number;
  description?: string;
  done?: boolean;
};

export type AddTodoAction = {
  type: string;
  payload: Todo;
};
