import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

import { BrowserRouter } from "react-router-dom";
import Register from '../Register';

const MockRegister = () => (
    <BrowserRouter>
        <Register />
    </BrowserRouter>
)

describe("Register Test", () => {
    it("should check if the header is there", () => {
        // render(<MockRegister />);
        // const headingElement = screen.getByRole("heading");
        // expect(headingElement).toBeInTheDocument();
    })
})