import React from 'react';
import { render, screen } from '@testing-library/react';
import Subtitle from './Subtitle';
import '@testing-library/jest-dom/extend-expect';

test('renders subtitle correctly', () => {
  render(<Subtitle subtitle="Test Subtitle" />);
  expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
});