import React from 'react';
import { useNavigate } from 'react-router';
import { Footer } from '../layout/Footer/Footer';
import { Navbar } from '../layout/Navbar/Navbar';
import { Main } from '../pages/Main/Main';

const App = (): JSX.Element => {
    const navigate = useNavigate();

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
            />
            <Main />
            <Footer />
        </>
    );
};

export default App;
