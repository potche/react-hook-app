import { describe, vi } from 'vitest';
import { MultipleCustomHooks } from '../../src/examples';
import { render } from '@testing-library/react';
import { useCounter, useFetch } from '../../src/hooks';

vi.mock('../../src/hooks/useCounter');
vi.mock('../../src/hooks/useFetch');

describe.skip('Pruenas de MultipleCustomHooks', () => {
  const mockIncrement = vi.fn();

  vi.mocked(useCounter).mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should first..', () => {
    vi.mocked(useFetch).mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
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

    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    expect(nextButton.disabled).toBeFalsy();
  });

  test('debe de llamar la función de incrementar', () => {
    vi.mocked(useFetch).mockReturnValue({
      data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
