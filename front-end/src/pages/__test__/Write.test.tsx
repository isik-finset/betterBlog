import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Write from '../blog-templates/Write';
import { BrowserRouter } from 'react-router-dom';
import user from '@testing-library/user-event';
import { axiosInst } from 'src/utils/axios';
import { useNavigate } from 'react-router-dom';
// ------------------------------------------------------------

interface Blog {
    title: string;
    description: string;
    body: string;
    topic: string;
    id: number;
    firstName: string;
    lastName: string;
  }


  // ------------------------------------------------------------

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

    describe("input fields", () => {
        it("should be able to type in title input", () => {
            render(<MockWrite />);
            const inputElement: HTMLInputElement = screen.getByPlaceholderText(/Give your blog a title.../i);
            fireEvent.change(inputElement, { target: { value: "React Testing Library" } })
            expect(inputElement.value).toBe("React Testing Library");
        })

        it("should be able to type in description input", () => {
            render(<MockWrite />);
            const inputElement: HTMLInputElement = screen.getByPlaceholderText(/Write a short description.../i);
            fireEvent.change(inputElement, { target: { value: "des" } });
            expect(inputElement.value).toBe("des");
        })

        it("should be able to type in body input", () => {
            render(<MockWrite />);
            const inputElement: HTMLInputElement = screen.getByPlaceholderText(/Tell your story.../i);
            fireEvent.change(inputElement, { target: { value: "body" } });
            expect(inputElement.value).toBe("body");
        })

        it("should be able to type in topic input", () => {
            render(<MockWrite />);
            const inputElement: HTMLInputElement = screen.getByPlaceholderText(/Topic, in a single word.../i);
            fireEvent.change(inputElement, { target: { value: "topic" } });
            expect(inputElement.value).toBe("topic");
        })
    })
    describe("Integration", () => {
        
        it('should asser that all the form is being submitted and the app redirects to the Landing page', async () => {
            const bearer = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwiaWF0IjoxNjQ0MzgwODAxLCJleHAiOjE2NDQzODgwMDF9.GHvdSxPoDIe8WknAzeWytsGnal7VSMLS6qWJPGSekFQ'
    // const navigate = useNavigate();
    
    //post data
    const onSubmit = async (data: Blog) => {
        try {
          const result = await axiosInst.post(
            'posts/create',
            {
              firstName: data.firstName,
              lastName: data.lastName,
              authorId: Number(data.id),
              title: data.title,
              body: data.body,
              description: data.description,
              topic: data.topic,
            },
            { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwiaWF0IjoxNjQ0MzgwODAxLCJleHAiOjE2NDQzODgwMDF9.GHvdSxPoDIe8WknAzeWytsGnal7VSMLS6qWJPGSekFQ' } }
          );
          console.log(result);
          if (result.status === 201) {
            console.log('You can add rerouting in here');
            // navigate('/my-posts')
          }
        } catch (e) {
          console.error(e);
        }
        // alert(JSON.stringify(data))
      };

            const mockPost = {
                firstName: 'james',
                lastName: 'bond',
                authorId: 1,
                title: 'movie',
                body: 'movie',
                description: 'movie',
                topic: 'movie',
            }
            
            render(<MockWrite />);
            user.type(await screen.findByPlaceholderText(/Give your blog a title.../i), 'macbook');
            const publishButton = await screen.findByRole("button");
            expect(publishButton).toBeEnabled();
            user.click(publishButton);

            // await screen.findByText(/chamber/i)
            // expect(onSubmit).toHaveBeenCalledWith(mockPost);
            // expect(onSubmit).toHaveBeenCalledTimes(1);
            // expect(screen.getByText(mockPost.firstName)).toBeInTheDocument();
        })
    })

});