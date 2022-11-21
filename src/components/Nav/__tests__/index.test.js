import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    //Baseline test to see Nav Component renders
    it('renders', () => {
        render(<Nav/>);
    });

    //Snapshot test
    it('matches snapshot of expected structure', () => {
        const {asFragment} = render(<Nav/>);
        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

//Test to see if camera emoji is visible
describe('emoji is visible', () => {
    it('inserts emoji into H2', () => {
        //Arrange
        const {getByLabelText} = render(<Nav/>);
        //Assert
        expect(getByLabelText('camera')).toHaveTextContent('');
    })
});


//Test Link for visibility
describe('Links are visible', () => {
    it('inserts text into the links', ()=> {
        //Arrange
        const {getByTestId} = render(<Nav/>);

        //Assert,Expected result
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})