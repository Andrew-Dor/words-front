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
            <div style={{ display: 'flex', justifyContent: 'space-between', width: 580 }}>
                <Button size="medium" text="Default" variant="primary" />
                <Button size="medium" text="Default" variant="success" disabled />
                <Button size="medium" text="Default" variant="warning" disabled />
                <Button size="medium" text="Default" variant="error" disabled />
                <Button size="medium" text="Default" isSquare />
                <Button size="medium" text="Default" outline disabled />
                <Button size="medium" text="Default" variant="primary" disabled />
            </div>
        </div>
    );
};
