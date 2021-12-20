import React from 'react';
import { PasswordResetForm } from './PasswordResetForm/PasswordResetForm';

export const PasswordReset = (): JSX.Element => {
    return (
        <section>
            <div className="auth-block">
                <div className="auth-form">
                    <PasswordResetForm message="Password reset" />
                </div>
            </div>
        </section>
    );
};
