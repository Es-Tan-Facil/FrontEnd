import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

test('renders text', () => {
  render(<Text text="Test Text" />);
  expect(screen.getByText('Test Text')).toBeInTheDocument();
});