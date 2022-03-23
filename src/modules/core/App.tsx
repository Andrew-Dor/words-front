import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { gql, useQuery } from '@apollo/client';
import { Footer } from '../layout/Footer/Footer';
import { Navbar } from '../layout/Navbar/Navbar';
import { Sidebar } from '../layout/Sidebar/Sidebar';
import { Main } from '../pages/Main/Main';

import { useUserState } from './stores/userState';

const App = (): JSX.Element => {
    // signIn(params: { email: "test1@test.com", password: "123Test" }) {

    const GET_USER_INFO = gql`
        query getUserInfo {
            getUserInfo {
                email
                name
            }
        }
    `;

    const navigate = useNavigate();

    const userState = useUserState();

    const { data, loading } = useQuery(GET_USER_INFO);

    useEffect(() => {
        if (data?.getUserInfo) {
            userState.set({
                name: data.getUserInfo.name,
                email: data.getUserInfo.email,
            });
        }
    }, [data]);

    return (
        <>
            <Navbar
                menuItems={[
                    {
                        id: 'home',
                        title: 'Home',
                        action: () => {
                            navigate('/home');
                        },
                    },
                    {
                        id: 'dictionaries',
                        title: 'My dictionaries',
                        action: () => {
                            navigate('/home');
                        },
                    },
                ]}
                user={userState.get() ?? undefined}
            />
            <Main isAuthenticated={!!userState.get()?.name} isLoading={loading} />
            <Sidebar />
            <Footer />
        </>
    );
};

export default App;
