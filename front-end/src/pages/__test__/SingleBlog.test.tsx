import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import SingleBlog from '../blog-templates/SingleBlog';

const data = {
    id: '123',
    createdDt: 'yesterday',
    firstName: 'John',
    lastName: 'Doe',
    title: 'Harry Potter and the Chamber of Secrets',
    description: 'something happened there',
    body: 'once upon a time',
    topic: 'thriller',
}


describe("SingleBlog-Test", () => {
    it("should render the correct title", () => {
        render(<SingleBlog props={data} />);
        const headingElement = screen.getByRole("heading", { name: /Harry/i });
        expect(headingElement).toBeInTheDocument();
    })

    it("should render the correct FirstName", () => {
        render(<SingleBlog props={data} />);
        const labelElement = screen.getByText(/John/i);
        expect(labelElement).toBeInTheDocument();
    })

    it("should render the correct lastName", () => {
        render(<SingleBlog props={data} />);
        const textElement = screen.getByText(/Doe/i);
        expect(textElement).toBeInTheDocument();
    })

    it("should render the correct createdDt", () => {
        render(<SingleBlog props={data} />);
        const textElement = screen.getByText(/yesterday/i);
        expect(textElement).toBeInTheDocument();
    })

    it("should render the correct topic", () => {
        render(<SingleBlog props={data} />);
        const textElement = screen.getByText(/thriller/i);
        expect(textElement).toBeInTheDocument();
    })

    it("should render the correct description", () => {
        render(<SingleBlog props={data} />);
        const textElement = screen.getByText(/something happened there/i);
        expect(textElement).toBeInTheDocument();
    })

    it("should render the correct body", () => {
        render(<SingleBlog props={data} />);
        const textElement = screen.getByText(/once/i);
        expect(textElement).toBeInTheDocument();
    })

})