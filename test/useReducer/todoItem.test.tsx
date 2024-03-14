import React from 'react';
import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import { TodoItem } from '../../src/useReducer/TodoItem';

describe('Pruebas en <todoItem />', () => {
  const todo = { id: 1, description: 'Test TODO', done: false };
  const onDeleteTodoMock = vi.fn();
  const onToggleTodoMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('debe mostrar el TODO pendiente de mostrar', () => {
    const { getByRole, getByLabelText } = render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = getByRole('listitem') as HTMLLIElement;
    const spanElement = getByLabelText('span') as HTMLLabelElement;

    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );
    expect(spanElement.className).toContain('align-self-center');
  });

  test('debe mostar el TODO completado', () => {
    todo.done = true;
    const { getByLabelText } = render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = getByLabelText('span') as HTMLLabelElement;

    expect(spanElement.className).toContain('text-decoration-line-throug');
  });

  test('deberia llamar el toggleTodo cuando se hace clic en el span', () => {
    const { getByLabelText } = render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = getByLabelText('span') as HTMLLabelElement;

    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toBeCalledWith(todo);
  });

  test('deberia llamar el deleteTodo', () => {
    const { getByRole } = render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const buttonElement = getByRole('button') as HTMLButtonElement;

    fireEvent.click(buttonElement);
    expect(onDeleteTodoMock).toBeCalledWith(todo);
  });
});
