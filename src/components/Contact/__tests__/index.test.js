import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Contact component', () => {
    // baseline test
    it('renders', () => {
        render(<Contact
          contactSelected={mockContactSelected}
          setContactSelected={mockSetContactSelected}
        />);
    })
  
    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Contact
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
          />);
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('Contact form is rendering', () => {
  
    it('renders', () => {
        const { getByTestId } = render(<Contact contactSelected='true' />)
        expect(getByTestId('contact-h1')).toHaveTextContent('Contact me');
    });

    it('renders', () => {
        const { getByTestId } = render(<Contact contactSelected='true' />)
        expect(getByTestId('contact-button')).toHaveTextContent('Submit');
    });
  })