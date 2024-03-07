import { Todo } from '../types/reducer';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [] }: { todos: Todo[] }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
