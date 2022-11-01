/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from '../components/AlbumForm/index';

describe("Form component", () => {

    beforeEach(() => {
        render(<Form />)
    })

    it("Displays the form", () => {

        const heading = screen.getByRole("form");

        expect(heading).toBeInTheDocument();
        // expect(heading.textContent).toBe("test album")

    })

    it("Displays the album field", () => {

        const album = screen.getByPlaceholderText("Album name");
        expect(album).toBeInTheDocument();
    })

    it("Displays the release year field", () => {

        const release = screen.getByPlaceholderText("Release year");
        expect(release).toBeInTheDocument();
    })

    it("Displays the cover url field", () => {

        const url = screen.getByPlaceholderText("Cover URL");
        expect(url).toBeInTheDocument();
    })

    // it("Displays the album cover", () => {

    //     const cover = screen.getByRole("img");

    //     expect(cover).toBeInTheDocument();
    //     expect(cover.src).toContain("www.google.co.uk")

    // })

    // it("Changes the like button to green on first click", async () => {

    //     const button = screen.getByText("👍");
    //     const style = window.getComputedStyle(button)

    //     expect(button).toHaveStyle('background-color: white;')
    //     await userEvent.click(button);
    //     expect(button).toHaveStyle('background-color: green;')

    // })

    // it("Changes the like button back to white on second click", async () => {

    //     const button = screen.getByText("👍");
    //     const style = window.getComputedStyle(button)

    //     expect(button).toHaveStyle('background-color: white;')
    //     await userEvent.click(button);
    //     expect(button).toHaveStyle('background-color: green;')
    //     await userEvent.click(button);
    //     expect(button).toHaveStyle('background-color: white;')

    // })
})