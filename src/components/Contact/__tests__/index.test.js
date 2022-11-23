// __tests__/Contact.test.js 
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from './Contact';

afterEach(cleanup)

//Baseline test to check if component renders
describe ('if Contact page renders', () => { 
    it('renders', () => {
        render(<Contact/>)
    }) 

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />);
    
        expect(asFragment()).toMatchSnapshot();
      });
});

//Test H1 text content to be 'Contact Me'
    it('renders Contact Me', () => {
        const { getByTestId } = render(<Contact/>);
      
          expect(getByTestId('h1tag')).toHaveTextContent('Contact Me');
    })


//Test button text content matches "Submit"

    it('renders Submit', () => {
        const { getByTestId } = render(<Contact/>);
      
          expect(getByTestId('button')).toHaveTextContent('Submit');
    });
