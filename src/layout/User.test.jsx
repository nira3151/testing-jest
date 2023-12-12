import React from 'react';
import { render , fireEvent , screen } from '@testing-library/react';
import User from './User';

test('counter is increment' , () => {
    render(<User />);  
    const counter = screen.getByTestId('counter');
    const increaseCounter = screen.getByTestId('increment');
    fireEvent.click(increaseCounter);
    expect(counter).toHaveTextContent('1'); 
});

test('counter is decrement' , ()=> {
    render(<User />)
    const counter = screen.getByTestId('counter');
    const dedcrementCounter = screen.getByTestId('decrement');
    fireEvent.click(dedcrementCounter);
    expect(counter).toHaveTextContent('-1')
})