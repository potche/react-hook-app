import React from 'react';
import { describe, expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';

import { TodoApp } from '../../src/useReducer/TodoApp';
import { useTodo } from '../../src/hooks';

vi.mock('../../src/hooks/useTodo');

describe('Pruebas en <TodoApp />', () => {
  const todos = [
    { id: 1, description: 'Test TODO #1', done: false },
    { id: 2, description: 'Test TODO #2', done: true },
  ];

  vi.mocked(useTodo).mockReturnValue({
    todos,
    todosCount: 2,
    pendingTodosCount: 1,
    onNewTodo: vi.fn(),
    onDeleteTodo: vi.fn(),
    onToggleTodo: vi.fn(),
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('debe mostrar el componente', () => {
    const { getByText, getByRole } = render(<TodoApp />);

    expect(getByText('Test TODO #1')).toBeTruthy();
    expect(getByText('Test TODO #2')).toBeTruthy();
    expect(getByRole('textbox')).toBeTruthy();
  });
});
