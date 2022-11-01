/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Artist from '../components/Artist/index';

describe("Artist component", () => {

    beforeEach(() => {
        render(<Artist name="test" genre="rock" intro="lorem ipsum" />)
    })

    it("Displays a heading with the appropriate text", () => {

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe("test")

    })

    it("Displays the artist genre", () => {

        const genre = screen.getByText("rock");

        expect(genre).toBeInTheDocument();
        expect(genre.textContent).toBe("rock")

    })

    it("Displays the artist intro", () => {

        const intro = screen.getByText("lorem ipsum");

        expect(intro).toBeInTheDocument();
        expect(intro.textContent).toBe("lorem ipsum")

    })
})