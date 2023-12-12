import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';
describe("login form testing", () => {
  test('it should call onLogin with the correct credentials', () => {
    const mockOnLogin = jest.fn();

    const { getByLabelText, getByText } = render(<Login onLogin={mockOnLogin} />);

    fireEvent.change(getByLabelText('Username:'), { target: { value: 'testuser' } });
    fireEvent.change(getByLabelText('Password:'), { target: { value: 'testpassword' } });

    fireEvent.click(getByText('Login'));

    expect(mockOnLogin).toHaveBeenCalledWith({ username: 'testuser', password: 'testpassword' });
  });

})