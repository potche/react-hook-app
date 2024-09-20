import React from 'react';
import {
  fireEvent,
  getByLabelText,
  getByRole,
  getByText,
  render,
  screen,
} from '@testing-library/react';

import { MainApp } from '../../src/useContext/MainApp';
import { UserContext } from '../../src/useContext/context/UserContext';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <MainApp />', () => {
  const user = {
    id: 1,
    name: 'Isra',
    email: 'isra@dominio.com',
  };

  test('debe mostrar el Home', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    const h1 = getByLabelText('h1') as HTMLHeadingElement;
    expect(h1.innerHTML).toBe('Home');
  });

  test('debe mostrar el Login', () => {
    const { getByLabelText } = render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );

    const div = getByLabelText('div') as HTMLDivElement;
    expect(div.innerHTML).toContain('Login');
  });

  test('debe mostrar el About', () => {
    const { getByLabelText } = render(
      <MemoryRouter initialEntries={['/about']}>
        <MainApp />
      </MemoryRouter>
    );

    const div = getByLabelText('div') as HTMLDivElement;
    expect(div.innerHTML).toContain('About');
  });
});
