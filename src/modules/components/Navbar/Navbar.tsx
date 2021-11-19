import React from 'react';
import { Button } from '../Button/Button';
import './Navbar.scss';

// interface INavbarProps {
//     user?: IUser;
// }

export const Navbar = (): JSX.Element => {
    // const isAuthorized: boolean = !!user;
    return (
        <div className="navbar">
            <p>Nav</p>
            <Button size="small" text="TEST" />
        </div>
    );
};
