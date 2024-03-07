import { Todo } from '../types/reducer';

export const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{todo.description}</span>
      <button className="btn btn-danger">Borrar</button>
    </li>
  );
};