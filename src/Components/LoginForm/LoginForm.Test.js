// Importar dependencias
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import AuthService from '../../Services/AuthService';
import LoginForm from './LoginForm';
import { WithRouter } from '../../Common/WithRouter';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../Services/AuthService', () => ({
  login: jest.fn(),
}));

describe('LoginForm', () => {
  it('debe cambiar correctamente el valor del usuario', () => {
    const { getByLabelText } = render(<LoginForm />);
    const inputEl = getByLabelText(/usuario:/i);
    fireEvent.change(inputEl, { target: { value: 'ejemplo@ejemplo.com' } });
    expect(inputEl.value).toBe('ejemplo@ejemplo.com');
  });

  it('debe cambiar correctamente el valor de la contraseña', () => {
    const { getByLabelText } = render(<LoginForm />);
    const inputEl = getByLabelText(/contraseña:/i);
    fireEvent.change(inputEl, { target: { value: 'ejemplo12345' } });
    expect(inputEl.value).toBe('ejemplo12345');
  });

  it('debe llamar a la función handleSubmit() al enviar el formulario', async () => {
    const navigateMock = jest.fn();
    const routerMock = {
      navigate: navigateMock,
    }
    const FormWithRouter = WithRouter(LoginForm);
    const { getByRole } = render(<FormWithRouter router={routerMock} />);
    const submitBtn = getByRole('button', { name: /iniciar sesión/i });
    fireEvent.click(submitBtn);
    await waitFor(() => expect(AuthService.login).toHaveBeenCalledTimes(1));
    
  });
});