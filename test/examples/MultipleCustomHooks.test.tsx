import React from 'react';
import { describe, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { MultipleCustomHooks } from '../../src/examples/MultipleCustomHooks';
import { useCounter, useFetch } from '../../src/hooks';

vi.mock('../../src/hooks/useCounter');
vi.mock('../../src/hooks/useFetch');

describe('Pruenas de <MultipleCustomHooks />', () => {
  const mockIncrement = vi.fn();

  vi.mocked(useCounter).mockReturnValue({
    counter: 1,
    increment: mockIncrement,
    decrement: vi.fn(),
    reset: vi.fn(),
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('debe de mostrar el componente por defecto', () => {
    vi.mocked(useFetch).mockReturnValue({
      data: [],
      isLoading: true,
      hasError: null,
    });

    const { getByText, getByRole } = render(<MultipleCustomHooks />);
    expect(getByText('Loading...'));
    expect(getByText('BreakingBad Quotes'));

    const nextButton = getByRole('button', {
      name: 'Next quote',
    }) as HTMLButtonElement;
    expect(nextButton.disabled).toBeTruthy();
  });

  test('debe de mostrar un Quote', () => {
    vi.mocked(useFetch).mockReturnValue({
      data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText('Hola Mundo')).toBeTruthy();
    expect(screen.getByText('Fernando')).toBeTruthy();

    const nextButton = screen.getByRole('button', {
      name: 'Next quote',
    }) as HTMLButtonElement;
    expect(nextButton.disabled).toBeFalsy();
  });

  test('debe de llamar la función de incrementar', () => {
    vi.mocked(useFetch).mockReturnValue({
      data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', {
      name: 'Next quote',
    }) as HTMLButtonElement;
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
