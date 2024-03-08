import { Todo } from '../types/reducer';
import { TodoItem } from './TodoItem';

export const TodoList = ({
  todos = [],
  onDeleteTodo,
  onToggleTodo,
}: {
  todos: Todo[];
  onDeleteTodo: (todo: Todo) => void;
  onToggleTodo: (todo: Todo) => void;
}) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};
