import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
//Renders First About test to see that the component is rendering
it('renders', () => {
    render(<About/>);
});


//Second Test
it('matches snapshot DOM node structure', () => {
    //render About
    const {asFragment} = render(<About/>);
    expect(asFragment()).toMatchSnapshot();
})

})