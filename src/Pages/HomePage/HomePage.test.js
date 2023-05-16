import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';

describe('HomePage', () => {
    it('should render all the expected components', () => {
        const { getByTestId } = render(
            <Router>
                <HomePage />
            </Router>
        );

        expect(getByTestId('header')).toBeInTheDocument();
        expect(getByTestId('donation-cards')).toBeInTheDocument();
        expect(getByTestId('who-are-we')).toBeInTheDocument();
        expect(getByTestId('news-section')).toBeInTheDocument();
        expect(getByTestId('our-trip')).toBeInTheDocument();
        expect(getByTestId('bus-animation')).toBeInTheDocument();
        expect(getByTestId('button-back-to-top')).toBeInTheDocument();
    });
});

