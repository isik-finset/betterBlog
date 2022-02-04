import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Write from '../blog-templates/Write';
import { BrowserRouter } from 'react-router-dom';

const MockWrite = () => (
    <BrowserRouter>
        <Write />
    </BrowserRouter>
)

describe("Write-Test", () => {

    describe("textField", () => {
        it("should render the correct input field for the title", () => {
            render(<MockWrite />);
            const inputElement = screen.getByPlaceholderText(/Give your blog a title.../i);
            expect(inputElement).toBeInTheDocument();
        });

        it("should render the correct input field for the description", () => {
            render(<MockWrite />);
            const inputElement = screen.getByPlaceholderText(/Write a short description/i);
            expect(inputElement).toBeInTheDocument();
        });

        it("should render the correct input field for the body", () => {
            render(<MockWrite />);
            const inputElement = screen.getByTestId("body");
            expect(inputElement).toBeInTheDocument();
        })

        it("should render the correct input field for the topic", () => {
            render(<MockWrite />);
            const inputElements = screen.getAllByRole("textbox");
            expect(inputElements.length).toBe(4);
        })
    })

    describe("button", () => {
        it("should check if the button exists", () => {
            render(<MockWrite />);
            const buttonElement = screen.getByRole("button");
            expect(buttonElement).toBeInTheDocument();
        })
    })

});