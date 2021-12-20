import React from 'react';
import { Routes, Route } from 'react-router';
import { Welcome } from '../Welcome/Welcome';
import { Home } from '../Home/Home';
import { SignIn } from '../Auth/SignIn/SignIn';
import { SignUp } from '../Auth/SignUp/SignUp';
import { PasswordReset } from '../Auth/PasswordReset/PasswordReset';

export const Main = (): JSX.Element => {
    return (
        <main id="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/password" element={<PasswordReset />} />
            </Routes>
        </main>
    );
};
