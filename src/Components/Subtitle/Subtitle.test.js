import React from 'react';
import { render, screen } from '@testing-library/react';
import Subtitle from './Subtitle';
import '@testing-library/jest-dom/extend-expect';


describe('Subtitle', () => {
  it('renders the subtitle text', () => {
    const { getByText } = render(<Subtitle subtitle="Test subtitle" />);

    expect(getByText('Test subtitle')).toBeInTheDocument();
  });
});
