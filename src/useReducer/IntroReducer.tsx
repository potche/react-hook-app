type Todo = {
  id: number;
  todo: string;
  done: boolean;
};

type AddTodoAction = {
  type: string;
  payload: Todo;
};

const initialState: Todo[] = [
  {
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
  },
];

const TodoReducer = (state = initialState, action: AddTodoAction): Todo[] => {
  if (action.type === '[TODO] add todo') {
    return [...state, action.payload];
  }

  return state;
};

const newTodo = {
  id: 1,
  todo: 'Recolectar la piedra del poder',
  done: false,
};

const addTodoAction: AddTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo,
};

const todos = TodoReducer(initialState, addTodoAction);
