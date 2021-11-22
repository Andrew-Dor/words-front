import React from 'react';
import { Button } from '../Button/Button';

// interface INavbarProps {
//     user?: IUser;
// }

export const Navbar = (): JSX.Element => {
    // const isAuthorized: boolean = !!user;
    return (
        <div className="navbar">
            <p>Nav</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: 480 }}>
                <Button size="medium" text="Default" variant="primary" />
                <Button size="medium" text="Default" variant="success" />
                <Button size="medium" text="Default" variant="warning" />
                <Button size="medium" text="Default" variant="error" />
                <Button size="medium" text="Default" isSquare />
                <Button size="medium" text="Default" outline />
            </div>
        </div>
    );
};
