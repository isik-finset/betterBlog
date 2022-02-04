import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyBlogs from '../blog-templates/MyBlogs';
import { BrowserRouter } from 'react-router-dom';


interface MyBlogsProps {
    props: {
        id: string;
        title: string;
        description: string;
        firstName: string;
        lastName: string;
        createdDt: string;
        topic: string;
    };
}

const data = {
    id: '123',
    title: 'Markdown',
    description: 'this is a description',
    firstName: 'John',
    lastName: 'Doe',
    createdDt: 'yesterday',
    topic: 'MKD',
};

const MockMyBlogs = ({ props }: MyBlogsProps) => (
    <BrowserRouter>
        <MyBlogs props={props} />
    </BrowserRouter>
)

describe("MyBlogs-Test", () => {
    it("should check if the author is rendered properly", () => {
        render(<MockMyBlogs props={data} />);
        const paragraphElement = screen.getByText(/John Doe/i);
        expect(paragraphElement).toBeInTheDocument();
    })

    it("should check if the 'title' rendered matches with the prop passed", () => {
        render(<MockMyBlogs props={data} />);
        const headingElement = screen.getByRole("heading", { name: /Markdown/i });
        expect(headingElement).toBeInTheDocument();
    })

    it("should check if the 'description' rendered matches with the prop passed", () => {
        render(<MockMyBlogs props={data} />);
        const headingElement = screen.getByRole("heading", { name: /this is a description/i });
        expect(headingElement).toBeInTheDocument();
    })

    it("should check the 'createdDt' receives the prop", () => {
        render(<MockMyBlogs props={data} />);
        const paragraphElement = screen.getByText(/yesterday/i);
        expect(paragraphElement).toBeInTheDocument();
    })
})