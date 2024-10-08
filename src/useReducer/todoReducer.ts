import { AddTodoAction, Todo } from '../types/reducer';

export const todoReducer = (initialState: Todo[], action: AddTodoAction) => {
  switch (action.type) {
    case '[TODO] Add todo':
      return [...initialState, action.payload];

    case '[TODO] Remove todo':
      return initialState.filter((todo) => todo.id !== action.payload.id);

    case '[TODO] Toggle todo':
      return initialState.map((todo) => {
        if (todo.id === action.payload.id) {
          const todoToggle = {
            ...todo,
            done: !todo.done,
          };

          return todoToggle;
        } else {
          return todo;
        }
      });
    default:
      return initialState;
  }
};
