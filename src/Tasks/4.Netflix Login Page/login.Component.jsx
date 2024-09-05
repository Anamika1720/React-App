import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

// Styled components
const FormContainer = styled.div`
    width: 600px;
    margin: auto;
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 6px;
`;

const InputDiv = styled.div`
    margin-bottom: 6px;
`;

const Input = styled.input`
    width: 500px;
    padding: 12px;
`;

const ErrorText = styled.p`
    color: red;
    font-size: 12px;
    margin-top: 6px;
`;

const SubmitButton = styled.button`
    width: 250px;
    padding: 12px;
    background-color: #007bff;
    color: white;
`;

// LoginForm Component
const LoginForm = () => {
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    const [loginErr, setLoginErr] = useState({
        email: false,
        password: false,
    });

    const validateField = (name, value) => {
        if (name === 'email') {
            return !value ? 'Email is required' : '';
        } else if (name === 'password') {
            return !value ? 'Password is required' : '';
        }
        return '';
    };

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setLogin((prev) => ({ ...prev, [name]: value }));
    };

    const onBlur = (e) => {
        const { name, value } = e.target;
        const errorMsg = validateField(name, value);
        setLoginErr((prev) => ({ ...prev, [name]: errorMsg }));
    };

    const onLoginSubmit = () => {
        let hasError = false;
        const newErrors = {
            email: validateField('email', login.email),
            password: validateField('password', login.password),
        };

        if (newErrors.email) hasError = true;
        if (newErrors.password) hasError = true;

        setLoginErr(newErrors);

        if (!hasError) {
            toast.success("Login Successful");
        }
    };

    return (
        <FormContainer>
            <Title>Login</Title>
            <InputDiv>
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={login.email}
                    onChange={onInputChange}
                    onBlur={onBlur}
                />
                {loginErr.email && <ErrorText>{loginErr.email}</ErrorText>}
            </InputDiv>

            <InputDiv>
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={login.password}
                    onChange={onInputChange}
                    onBlur={onBlur}
                />
                {loginErr.password && <ErrorText>{loginErr.password}</ErrorText>}
            </InputDiv>

            <SubmitButton onClick={onLoginSubmit}>Login</SubmitButton>
        </FormContainer>
    );
};

export default LoginForm;
