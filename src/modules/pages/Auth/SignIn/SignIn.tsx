import { useLazyQuery } from '@apollo/client';
import { GraphQLError } from 'graphql';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { SIGN_IN } from '../../../../queries/auth/signIn.gql';
import { useUserState } from '../../../core/stores/userState';
import { LoginForm } from './LoginForm/LoginForm';

export const SignIn = (): JSX.Element => {
    const [errorMessage, setErrorMessage] = useState('');

    const [login, { data }] = useLazyQuery(SIGN_IN);

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
        }).catch((error) => {
            error.graphQLErrors.forEach((err: GraphQLError) => {
                if (err.extensions.code === '409') {
                    setErrorMessage(err.message);
                }
            });
        });
    };

    return (
        <section>
            <div className="auth-block">
                <div className="auth-form">
                    <LoginForm message="Sign in" onSubmit={handleSubmit} errorMessage={errorMessage} />
                </div>
            </div>
        </section>
    );
};
