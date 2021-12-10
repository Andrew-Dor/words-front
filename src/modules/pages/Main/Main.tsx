import React from 'react';
import { Routes, Route } from 'react-router';
import { Welcome } from '../Welcome/Welcome';
import { Login } from '../Login/Login';
import { Home } from '../Home/Home';

export const Main = (): JSX.Element => {
    return (
        <main id="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </main>
    );
};
