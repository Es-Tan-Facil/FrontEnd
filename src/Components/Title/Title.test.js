import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './Title';

test('renders title text', () => {
  render(<Title title="Test Title" />);
  expect(screen.getByText('Test Title')).toBeInTheDocument();
});