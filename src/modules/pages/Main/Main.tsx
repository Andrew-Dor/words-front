import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { Welcome } from '../Welcome/Welcome';
import { Home } from '../Home/Home';
import { SignIn } from '../Auth/SignIn/SignIn';
import { SignUp } from '../Auth/SignUp/SignUp';
import { PasswordReset } from '../Auth/PasswordReset/PasswordReset';
import { Loader } from '../../components/Loader/Loader';

interface IMainProps {
    isAuthenticated: boolean;
    isLoading?: boolean;
}

export const Main = ({ isAuthenticated, isLoading }: IMainProps): JSX.Element => {
    return (
        <main id="main">
            {isLoading ? (
                <Loader type="dots" size="large" centered />
            ) : (
                <Routes>
                    <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/Welcome" />} />
                    <Route path="/welcome" element={isAuthenticated ? <Navigate to="/" /> : <Welcome />} />
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/password" element={<PasswordReset />} />
                </Routes>
            )}
        </main>
    );
};
