import React from 'react';
import { Footer } from '../layout/Footer/Footer';
import { Navbar } from '../layout/Navbar/Navbar';
import { Main } from '../pages/Main/Main';

const App = (): JSX.Element => {
    return (
        <>
            <Navbar
                menuItems={[
                    {
                        id: 'home',
                        title: 'Home',
                        action: () => {
                            console.log('Home');
                        },
                    },
                    {
                        id: 'dictionaries',
                        title: 'My dictionaries',
                        action: () => {
                            console.log('dictionaries');
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
