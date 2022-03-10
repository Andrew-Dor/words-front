import { gql, useLazyQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useUserState } from '../../../core/stores/userState';
import { LoginForm } from './LoginForm/LoginForm';

export const SignIn = (): JSX.Element => {
    const SIGN_IN = gql`
        query signIn($email: String!, $password: String!) {
            signIn(params: { email: $email, password: $password }) {
                email
                name
            }
        }
    `;

    const [login, { loading, error, data }] = useLazyQuery(SIGN_IN);

    const userState = useUserState();
    const navigate = useNavigate();

    useEffect(() => {
        if (data?.signIn) {
            userState.set({
                name: data.signIn.name,
                email: data.signIn.email,
            });
            navigate('/');
        }
    }, [data]);

    const handleSubmit = (email: string, password: string) => {
        login({
            variables: {
                email,
                password,
            },
        });
    };

    return (
        <section>
            <div className="auth-block">
                <div className="auth-form">
                    <LoginForm message="Sign in" onSubmit={handleSubmit} />
                </div>
            </div>
        </section>
    );
};
