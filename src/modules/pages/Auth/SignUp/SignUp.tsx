import { useMutation } from '@apollo/client';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { SIGN_UP } from '../../../../queries/auth/signUp.gql';
import { RegistrationForm } from './RegistrationForm/RegistrationForm';

export const SignUp = (): JSX.Element => {
    const [signUp, { data }] = useMutation(SIGN_UP);

    const navigate = useNavigate();

    useEffect(() => {
        // eslint-disable-next-line
        debugger
        if (data?.signUp) {
            navigate('/signIn');
        }
    }, [data]);

    const handleSubmit = (email: string, password: string, name: string) => {
        signUp({
            variables: {
                email,
                password,
                name,
            },
        });
    };

    return (
        <section>
            <div className="auth-block">
                <div className="auth-form">
                    <RegistrationForm message="Sign up" onSubmit={handleSubmit} />
                </div>
            </div>
        </section>
    );
};
