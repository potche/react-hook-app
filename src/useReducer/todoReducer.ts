import { AddTodoAction, Todo } from '../types/reducer';

export const todoReducer = (
  initialState: Todo[] = [],
  action: AddTodoAction
) => {
  switch (action.type) {
    case 'ABC':
      throw new Error('action.type = ABC no esta implementada');

    default:
      return initialState;
  }
};
