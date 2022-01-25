import React from 'react';
import { useNavigate } from 'react-router';
import { Footer } from '../layout/Footer/Footer';
import { Navbar } from '../layout/Navbar/Navbar';
import { Sidebar } from '../layout/Sidebar/Sidebar';
import { Main } from '../pages/Main/Main';

import { useUserState } from './stores/userState';

const App = (): JSX.Element => {
    const navigate = useNavigate();

    const userState = useUserState();

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
                user={userState.value ? userState.value : undefined}
            />
            <Main isAuthenticated={!userState.value} />
            <Sidebar />
            {/* <Main isAuthenticated={!!userState.value} /> */}
            <Footer />
        </>
    );
};

export default App;
