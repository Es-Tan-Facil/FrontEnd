// Importar dependencias
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { animateScroll as scroll } from 'react-scroll';
import ButtonBackToTop from './ButtonBackToTop';

// Mockear el comportamiento esperado de la librería react-scroll
jest.mock('react-scroll', () => ({
  animateScroll: {
    scrollToTop: jest.fn(),
  },
}));

// Crear pruebas
it('debería mostrar el botón correctamente cuando se requiera', () => {
  // Prueba inicial
  const { queryByTestId } = render(<ButtonBackToTop />);
  expect(queryByTestId('btn-back-to-top')).toBeNull();

  // Cuando la ventana se ha desplazado antes de 1000px, el botón aún no debería ser visible
  window.scrollY = 800;
  fireEvent.scroll(window);
  expect(queryByTestId('btn-back-to-top')).toBeNull();

  // Cuando la ventana se ha desplazado 1000px, el botón debería ser visible
  window.scrollY = 1500;
  fireEvent.scroll(window);
  expect(queryByTestId('btn-back-to-top')).toBeTruthy();

  // Cuando la ventana se ha desplazado menos de 1000px, el botón debería ocultarse nuevamente
  window.scrollY = 500;
  fireEvent.scroll(window);
  expect(queryByTestId('btn-back-to-top')).toBeNull();
});

it('debería ejecutar la función scrollToTop() al hacer clic en el botón', () => {
  // Prueba inicial
  const { queryByTestId } = render(<ButtonBackToTop />);
  expect(queryByTestId('btn-back-to-top')).toBeNull();

  // Cuando la ventana se ha desplazado 1000px y se hace clic en el botón, se debe ejecutar la función de scroll
  window.scrollY = 1500;
  fireEvent.scroll(window);
  const btnEl = queryByTestId('btn-back-to-top');
  expect(btnEl).toBeTruthy();
  fireEvent.click(btnEl);
  expect(scroll.scrollToTop).toHaveBeenCalledTimes(1);
});