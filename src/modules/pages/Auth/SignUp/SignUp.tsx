import React from 'react';
import { RegistrationForm } from './RegistrationForm/RegistrationForm';

export const SignUp = (): JSX.Element => {
    return (
        <section>
            <div className="auth-block">
                <div className="auth-form">
                    <RegistrationForm message="Sign up" />
                </div>
            </div>
        </section>
    );
};
