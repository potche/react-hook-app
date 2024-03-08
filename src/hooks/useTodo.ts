import { useEffect, useReducer } from 'react';
import { Todo } from '../types/reducer';
import { todoReducer } from '../useReducer/todoReducer';

const initLocal = (): Todo[] => {
  const todos = localStorage.getItem('todos');

  return todos ? JSON.parse(todos) : [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], initLocal);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (newTodo: Todo) => {
    const action = { type: '[TODO] Add todo', payload: newTodo };
    dispatch(action);
  };

  const onDeleteTodo = (todo: Todo) => {
    const action = { type: '[TODO] Remove todo', payload: todo };
    dispatch(action);
  };

  const onToggleTodo = (todo: Todo) => {
    console.log({ todo });
    const action = { type: '[TODO] Toggle todo', payload: todo };
    dispatch(action);
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((t) => !t.done).length,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
  };
};
