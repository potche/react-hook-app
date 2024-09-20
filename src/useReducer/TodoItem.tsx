import { Todo } from '../types/reducer';

export const TodoItem = ({
  todo,
  onDeleteTodo,
  onToggleTodo,
}: {
  todo: Todo;
  onDeleteTodo: (todo: Todo) => void;
  onToggleTodo: (todo: Todo) => void;
}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
        onClick={() => onToggleTodo(todo)}
        aria-label="span"
      >
        {todo.description}
      </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo)}>
        Borrar
      </button>
    </li>
  );
};
