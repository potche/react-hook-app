import { useReducer, useEffect } from 'react';
import { Todo } from '../types/reducer';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const initialState: Todo[] = [
  /*{
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false,
  }*/
];

const initLocal = (): Todo[] => {
  const todos = localStorage.getItem('todos');

  return todos ? JSON.parse(todos) : [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, initLocal);

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

  return (
    <>
      <h1>
        TodoApp: 10 <small>Pendientes: 2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  );
};
