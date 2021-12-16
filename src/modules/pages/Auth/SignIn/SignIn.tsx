import React from 'react';
import { LoginForm } from './LoginForm/LoginForm';

export const SignIn = (): JSX.Element => {
    return (
        <section>
            <div className="auth-block">
                <img className="auth-top-image" src="/images/login_bg.png" alt="Login" />
                <div className="auth-form">
                    <LoginForm message="Sign in" />
                </div>
            </div>
        </section>
    );
};
