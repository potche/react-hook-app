import React from 'react';
import { render } from '@testing-library/react';

import { Navbar } from '../../src/useContext/Navbar';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <Navbar />', () => {
  test('debe mostrar el Home', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(getByText('Home')).toBeTruthy();
  });

  test('debe mostrar el Login', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/login']}>
        <Navbar />
      </MemoryRouter>
    );

    expect(getByText('Login')).toBeTruthy();
  });

  test('debe mostrar el About', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/about']}>
        <Navbar />
      </MemoryRouter>
    );

    expect(getByText('About')).toBeTruthy();
  });
});
