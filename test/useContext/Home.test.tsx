import React from 'react';
import { render, screen } from '@testing-library/react';

import { Home } from '../../src/useContext/Home';
import { UserContext } from '../../src/useContext/context/UserContext';

describe('Pruebas en <Home />', () => {
  const user = {
    id: 1,
    name: 'Isra',
    email: 'isra@dominio.com',
  };

  test('debe mostrar el componente sin el usuario', () => {
    const { getByLabelText } = render(
      <UserContext.Provider value={{}}>
        <Home />
      </UserContext.Provider>
    );

    const preElement = getByLabelText('pre') as HTMLPreElement;
    expect(preElement.innerHTML).toBe('');
  });

  test('debe mostrar el componente con el usuario', () => {
    const { getByLabelText } = render(
      <UserContext.Provider value={{ user }}>
        <Home />
      </UserContext.Provider>
    );

    const preElement = getByLabelText('pre') as HTMLPreElement;

    expect(preElement.innerHTML).toContain(user.id);
    expect(preElement.innerHTML).toContain(user.name);
    expect(preElement.innerHTML).toContain(user.email);
  });
});
