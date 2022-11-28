import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  };


 afterEach(cleanup);

 describe('Modal Component', ()=> {
    it('renders', () => {
        //baseline render test
        render (<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
          />);
    });

    //Snapshot test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
          />);
    
        expect(asFragment()).toMatchSnapshot();
    });
 })

 //Test click event executes click handler by simulating user click on button
 describe('Click event', () => {
    it('calls onClose handler', () => {
        //Arrange: Render Modal
        const {getByText} = render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto}/>);

        //Act: Simulate Click Event
        fireEvent.click(getByText('Close this modal'));

//Assert: Expected matcher
expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
 })