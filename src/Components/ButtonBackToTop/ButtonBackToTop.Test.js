// Importar dependencias
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { animateScroll as scroll } from 'react-scroll';
import ButtonBackToTop from './ButtonBackToTop';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-scroll', () => ({
  animateScroll: {
    scrollToTop: jest.fn(),
  },
}));

it('Display the button when it is required', () => {
  
  const { queryByTestId } = render(<ButtonBackToTop />);
  expect(queryByTestId('btn-back-to-top')).toBeNull();

  window.scrollY = 800;
  fireEvent.scroll(window);
  expect(queryByTestId('btn-back-to-top')).toBeNull();

  window.scrollY = 1500;
  fireEvent.scroll(window);
  expect(queryByTestId('btn-back-to-top')).toBeTruthy();

  window.scrollY = 500;
  fireEvent.scroll(window);
  expect(queryByTestId('btn-back-to-top')).toBeNull();
});

it('Should execute the function scrollToTop() when the button is clicked', () => {
  // Prueba inicial
  const { queryByTestId } = render(<ButtonBackToTop />);
  expect(queryByTestId('btn-back-to-top')).toBeNull();

  window.scrollY = 1500;
  fireEvent.scroll(window);
  const btnEl = queryByTestId('btn-back-to-top');
  expect(btnEl).toBeTruthy();
  fireEvent.click(btnEl);
  expect(scroll.scrollToTop).toHaveBeenCalledTimes(1);
});