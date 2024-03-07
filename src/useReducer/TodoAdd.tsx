import { useForm } from '../hooks';
import { Todo } from '../types/reducer';

export const TodoAdd = ({ onNewTodo }: { onNewTodo: (todo: Todo) => void }) => {
  const { description, onInputChange, onResetForm } = useForm<Todo>({
    description: '',
  });

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (description?.length) {
      onNewTodo({
        id: new Date().getTime(),
        description,
        done: false,
      });
      onResetForm();
    }
  };
  return (
    <form action="" onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
