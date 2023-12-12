import React, { useState } from 'react';
import "./Registration.css"

const RegistrationForm = ({onLogin}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: 'male', // Default value
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        onLogin(formData)
    };



    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        data-testid="name"
                        required
                    />
                    </label>

                </div>
                <div>
                    <label htmlFor="email">Email:
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        data-testid="email"
                        required
                    />
                    </label>
                </div>

                <div>
                    <label htmlFor="password">Password:
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        data-testid="password"
                        required
                    />
                    </label>
                </div>

                <div>
                    <label htmlFor="confirmPassword">Confirm Password:
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        data-testid="confirmPassword"
                        required
                    />
                    </label>
                </div>

                <div>
                    <label htmlFor="gender">Gender:
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        data-testid="gender"
                        required
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    </label>
                </div>


                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
