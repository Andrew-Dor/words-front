import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';

const App = (): JSX.Element => {
    return (
        <div>
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
        </div>
    );
};

export default App;
