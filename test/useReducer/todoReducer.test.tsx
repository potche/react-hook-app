import { describe, expect, test } from 'vitest';
import { todoReducer } from '../../src/useReducer/todoReducer';
import { AddTodoAction } from '../../src/types/reducer';

describe('Pruebas en todoReducer', () => {
  const initialState = [{ id: 1, description: 'Test TODO', done: false }];

  test('debe de regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {} as AddTodoAction);
    expect(newState).toBe(initialState);
  });

  test('debe de regresar otro TODO', () => {
    const action: AddTodoAction = {
      type: '[TODO] Add todo',
      payload: { id: 2, description: 'Test TODO #2', done: false },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('debe de eliminar un TODO', () => {
    const action: AddTodoAction = {
      type: '[TODO] Remove todo',
      payload: initialState[0],
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test('debe de toggle del TODO', () => {
    const action: AddTodoAction = {
      type: '[TODO] Toggle todo',
      payload: initialState[0],
    };

    const [newState] = todoReducer(initialState, action);

    expect(newState.done).toBeTruthy();
  });
});
