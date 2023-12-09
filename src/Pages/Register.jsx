import React, { useState } from 'react';
import * as EmailValidator from 'email-validator';
import passwordRegexp from "password-regexp";

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        nameError: "",
        emailError: "",
        usernameError: "",
        passwordError: "",
        confirmPasswordError: ""
    });

    const handleForm = (evt) => {
        const { name, value } = evt.target;

        if (name === "name") {
            setUser({ ...user, name: value });
            setErrors({ ...errors, nameError: value.length === 0 ? "Name is required" : "" });
        } else if (name === "username") {
            setUser({ ...user, username: value });
            setErrors({ ...errors, usernameError: value.length === 0 ? "Username is required" : (value.includes(" ") ? "Username should not contain spaces" : "") });
        } else if (name === "email") {
            setUser({ ...user, email: value });
            setErrors({ ...errors, emailError: value.length === 0 ? "Email is required" : (EmailValidator.validate(value) ? "" : "Please enter a valid email") });
        } else if (name === "password") {
            setUser({ ...user, password: value });
            setErrors({ ...errors, passwordError: value.length < 3 || !passwordRegexp().test(value) ? "Password must be at least 3 characters and contain at least one uppercase or lowercase letter" : "" });
        } else if (name === "confirmPassword") {
            setUser({ ...user, confirmPassword: value });
            setErrors({ ...errors, confirmPasswordError: value !== user.password ? "Passwords don't match" : "" });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        console.log("Form submitted:", user);
    };

    return (
        <>
        <div className="container">
            <form autoComplete='off' onSubmit={handleSubmit}>
                <div className="mt-5 mb-3">
                    <label htmlFor="name" className="form-label ">Name:</label>
                    <input
                        type="text"
                        className={`form-control ${errors.nameError ? 'border-danger shadow-none' : ''}`}
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={handleForm}
                    />
                    <p style={{ color: 'red' }}>{errors.nameError}</p>
                </div>

                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input
                        type="text"
                        className={`form-control ${errors.usernameError ? 'border-danger shadow-none' : ''}`}
                        id="username"
                        name="username"
                        value={user.username}
                        onChange={handleForm}
                    />
                    <p style={{ color: 'red' }}>{errors.usernameError}</p>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="text"
                        className={`form-control ${errors.emailError ? 'border-danger shadow-none' : ''}`}
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleForm}
                    />
                    <p style={{ color: 'red' }}>{errors.emailError}</p>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        className={`form-control ${errors.passwordError ? 'border-danger shadow-none' : ''}`}
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={handleForm}
                    />
                    <p style={{ color: 'red' }}>{errors.passwordError}</p>
                </div>

                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                    <input
                        type="password"
                        className={`form-control ${errors.confirmPasswordError ? 'border-danger shadow-none' : ''}`}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleForm}
                    />
                    <p style={{ color: 'red' }}>{errors.confirmPasswordError}</p>
                </div>

                <button type="submit" className="btn btn-primary">Sign up</button>
            </form>
            </div>
        </>
    );
};

export default Register;
