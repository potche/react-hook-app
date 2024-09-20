import { useForm } from '../hooks/useForm';

type InitialForm = {
  username?: string;
  email?: string;
  password?: string;
};

export const FormWithCustomHook = () => {
  const { onInputChange, onResetForm, username, email, password } =
    useForm<InitialForm>({
      username: '',
      email: '',
      password: '',
    });

  return (
    <>
      <h1>Formulario con custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="fernando@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Borrar
      </button>
    </>
  );
};
