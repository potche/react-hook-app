import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const Login = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div aria-label="div">
      Login <small aria-label="small">{JSON.stringify(user)}</small>
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser!({
            id: 12345,
            name: 'Jose',
            email: 'nombre@dominio.com',
          })
        }
      >
        Establecer usuario
      </button>
    </div>
  );
};
