import React from 'react';
import { render, screen } from '@testing-library/react';
import DonationCards from './DonationCards';


describe('DonationCards', () => {
    it('should render all the expected components', () => {
        const { getByTestId } = render(<DonationCards />);

        const container = getByTestId('container');
        const cardKM = getByTestId('card-km');
        const cardSchool = getByTestId('card-school');
        const cardSchoolMaterial = getByTestId('card-school-material');
        const cardMoreHelp = getByTestId('card-more-help');

        expect(container).toBeInTheDocument();
        expect(cardKM).toBeInTheDocument();
        expect(cardSchool).toBeInTheDocument();
        expect(cardSchoolMaterial).toBeInTheDocument();
        expect(cardMoreHelp).toBeInTheDocument();
    });
});

describe("Button", () => {

    render(<DonationCards />);
    const button = screen.getByRole("button");

    test("Button Rendering", () => {
        expect(button).toBeInTheDocument();
    })

    test("Button Text", () => {
        expect(button).toHaveTextContent("Contacta");
    })
})