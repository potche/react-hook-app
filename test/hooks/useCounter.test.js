const { renderHook } = require('@testing-library/react');
import { expect } from 'vitest';
import { useCounter } from '../../src/hooks';
import { act } from 'react-dom/test-utils';

describe('Pruebas de useCounter', () => {
  test('debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('debe generar el contador con el vaor de 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('deberia incrementar el contador', () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;

    act(() => {
      increment();
    });

    expect(result.current.counter).toBe(11);
  });

  test('deberia decrementar en uno', () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    expect(result.current.counter).toBe(9);
  });

  test('deberia realizar el reset', () => {
    const { result } = renderHook(() => useCounter());
    const { decrement, reset } = result.current;

    act(() => {
      decrement();
      reset();
    });

    expect(result.current.counter).toBe(10);
  });
});
