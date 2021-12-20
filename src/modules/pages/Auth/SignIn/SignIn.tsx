import React from 'react';
import { LoginForm } from './LoginForm/LoginForm';

export const SignIn = (): JSX.Element => {
    return (
        <section>
            <div className="auth-block">
                <div className="auth-form">
                    <LoginForm message="Sign in" />
                </div>
            </div>
        </section>
    );
};
