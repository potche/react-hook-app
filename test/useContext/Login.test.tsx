import React from 'react';
import { vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import { Login } from '../../src/useContext/Login';
import { UserContext } from '../../src/useContext/context/UserContext';

describe('Pruebas en <Login />', () => {
  const user = {
    id: 1,
    name: 'Isra',
    email: 'isra@dominio.com',
  };

  test('debe mostrar el componente sin el usuario', () => {
    const { getByRole } = render(<Login />);

    const buttonElement = getByRole('button') as HTMLButtonElement;
    expect(buttonElement.innerHTML).toBe('Establecer usuario');
  });

  test('debe llamar el setUser cuando se hace clic en el boton', () => {
    const setUserMock = vi.fn();
    const { getByRole, getByLabelText } = render(
      <UserContext.Provider value={{ setUser: setUserMock }}>
        <Login />
      </UserContext.Provider>
    );

    const buttonElement = getByRole('button') as HTMLButtonElement;

    fireEvent.click(buttonElement);

    expect(setUserMock).toHaveBeenCalledWith({
      id: 12345,
      name: 'Jose',
      email: 'nombre@dominio.com',
    });
  });
});
