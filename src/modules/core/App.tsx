import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { gql, useQuery } from '@apollo/client';
import { Footer } from '../layout/Footer/Footer';
import { Navbar } from '../layout/Navbar/Navbar';
import { Sidebar } from '../layout/Sidebar/Sidebar';
import { Main } from '../pages/Main/Main';

import { useUserState } from './stores/userState';

const App = (): JSX.Element => {
    const SIGN_IN = gql`
        query signIn {
            signIn(params: { email: "test1@test.com", password: "123Test" }) {
                email
                name
            }
        }
    `;

    const navigate = useNavigate();

    const userState = useUserState();

    const { loading, error, data } = useQuery(SIGN_IN);

    useEffect(() => {
        console.log('GET DATA', JSON.stringify(data));
        if (data?.signIn) {
            userState.set({
                name: data.signIn.name,
                email: data.signIn.email,
            });
        }
    }, [data]);

    if (userState.promised) {
        // TODO: add loader
        return <p>Loading</p>;
    }

    if (userState.error) {
        // TODO: ERROR PAGE
        return <p>Error</p>;
    }

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
            <Main isAuthenticated={!!userState.get()?.name} />
            <Sidebar />
            {/* <Main isAuthenticated={!!userState.value} /> */}
            <Footer />
        </>
    );
};

export default App;
