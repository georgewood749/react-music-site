/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Album from '../components/Album/index';

describe("Album component", () => {

    beforeEach(() => {
        render(<Album name="test album" release="2000" cover="www.google.co.uk" />)
    })

    it("Displays a heading with the appropriate text", () => {

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe("test album")

    })

    it("Displays the release year", () => {

        const release = screen.getByText("Release date: 2000");

        expect(release).toBeInTheDocument();
        expect(release.textContent).toBe("Release date: 2000")

    })

    it("Displays the album cover", () => {

        const cover = screen.getByRole("img");

        expect(cover).toBeInTheDocument();
        expect(cover.src).toContain("www.google.co.uk")

    })

    it("Changes the like button to green on first click", async () => {

        const button = screen.getByText("👍");
        const style = window.getComputedStyle(button)

        expect(button).toHaveStyle('background-color: white;')
        await userEvent.click(button);
        expect(button).toHaveStyle('background-color: green;')

    })

    it("Changes the like button back to white on second click", async () => {

        const button = screen.getByText("👍");
        const style = window.getComputedStyle(button)

        expect(button).toHaveStyle('background-color: white;')
        await userEvent.click(button);
        expect(button).toHaveStyle('background-color: green;')
        await userEvent.click(button);
        expect(button).toHaveStyle('background-color: white;')

    })
})