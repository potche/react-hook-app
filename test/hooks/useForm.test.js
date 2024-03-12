const { renderHook } = require('@testing-library/react');
import { describe, expect, test } from 'vitest';
import { useForm } from '../../src/hooks';
import { act } from 'react-dom/test-utils';

describe('Pruebas de useForm', () => {
  const INITIAL_FORM = {
    name: 'algun nombre',
    email: 'nombre@dominio.com',
  };
  test('debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(INITIAL_FORM));
    const { formState, onInputChange, onResetForm } = result.current;

    expect(formState).toBe(INITIAL_FORM);
    expect(onInputChange).toEqual(expect.any(Function));
    expect(onResetForm).toEqual(expect.any(Function));
  });

  test('deberia cambiar el nombre del formulario', () => {
    const { result } = renderHook(() => useForm(INITIAL_FORM));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: 'name', value: 'Juanito' } });
    });

    expect(result.current.formState.name).toBe('Juanito');
  });

  test('deberia hacer el reset del formulario', () => {
    const { result } = renderHook(() => useForm(INITIAL_FORM));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { name: 'name', value: 'Juanito' } });
      onResetForm();
    });

    expect(result.current.formState).toBe(INITIAL_FORM);
  });
});
