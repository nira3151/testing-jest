import { act, fireEvent, render, screen } from "@testing-library/react";
import RegistrationForm from "./Registration";

describe("registration form testing", () => {

    const testObject = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: 'male'
    }

    test('test labels', () => {
        render(<RegistrationForm />);
        const nameLabel = screen.getByLabelText("Name:");
        const emailLabel = screen.getByLabelText("Email:");
        const passwordLabel = screen.getByLabelText("Password:");
        const confirmPassword = screen.getByLabelText("Confirm Password:");
        const gender = screen.getByLabelText("Gender:");
        expect(nameLabel).toBeInTheDocument();
        expect(emailLabel).toBeInTheDocument();
        expect(passwordLabel).toBeInTheDocument();
        expect(confirmPassword).toBeInTheDocument();
        expect(gender).toBeInTheDocument();
    });

    test('test onchange event', () => {
        const { getByTestId } = render(<RegistrationForm />);
            fireEvent.change(getByTestId('name'), { target: { value: testObject?.name } });
            fireEvent.change(getByTestId('email'), { target: { value: testObject?.email } });
            fireEvent.change(getByTestId('password'), { target: { value: testObject?.password } });
            fireEvent.change(getByTestId('confirmPassword'), { target: { value: testObject?.confirmPassword } });
            fireEvent.change(getByTestId('gender'), { target: { value: testObject?.gender } });
    })

    test('register with correct data', () => {
        const mockOnSubmit = jest.fn();
        const { getByLabelText, getByText } = render(<RegistrationForm onLogin={mockOnSubmit} />);

        fireEvent.change(getByLabelText('Name:'), { target: { value: testObject.name } });
        fireEvent.change(getByLabelText('Email:'), { target: { value: testObject.email } });
        fireEvent.change(getByLabelText('Password:'), { target: { value: testObject.password } });
        fireEvent.change(getByLabelText('Confirm Password:'), { target: { value: testObject.confirmPassword } });
        fireEvent.change(getByLabelText('Gender:'), { target: { value: testObject.gender } });

        fireEvent.submit(getByText('Register'));

        // Assert that the onSubmit function is called with the expected values
        expect(mockOnSubmit).toHaveBeenCalledWith(testObject)
    })
})