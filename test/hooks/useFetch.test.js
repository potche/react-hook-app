const { renderHook, waitFor } = require('@testing-library/react');
import { describe, expect, test } from 'vitest';
import { useFetch } from '../../src/hooks';

describe('Pruebas de useFetch', () => {
  test('debe generar el contador con el vaor de 100', async () => {
    const { result } = renderHook(() =>
      useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/1`)
    );
    await waitFor(() => expect(result.current.data.length).toBeGreaterThan(0));
    const { data, isLoading, hasError } = result.current;

    expect(data.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
    expect(hasError).toBeFalsy();
  });
});
