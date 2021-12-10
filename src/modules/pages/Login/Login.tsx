import React from 'react';
import { LoginForm } from './LoginForm/LoginForm';

export const Login = (): JSX.Element => {
    return (
        <section>
            <div className="form">
                <LoginForm message="Sign up" />
            </div>
        </section>
    );
};
