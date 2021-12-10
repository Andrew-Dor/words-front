import React from 'react';
import { Footer } from '../layout/Footer/Footer';
import { Navbar } from '../layout/Navbar/Navbar';
import { Home } from '../pages/Home/Home';

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
            <Home />
            <Footer />
        </>
    );
};

export default App;
