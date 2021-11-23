import React from 'react';
import { TiAdjustBrightness } from 'react-icons/ti';
import { IoIosAirplane } from 'react-icons/io';
import { Button } from '../Button/Button';

// interface INavbarProps {
//     user?: IUser;
// }

export const Navbar = (): JSX.Element => {
    // const isAuthorized: boolean = !!user;
    return (
        <div className="navbar">
            <p>Nav</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: 980 }}>
                <Button onClick={() => console.log('test')} size="medium" text="Default" variant="primary" />
                <Button onClick={() => console.log('test')} size="medium" text="Default" variant="success" />
                <Button onClick={() => console.log('test')} size="medium" text="Default" variant="warning" />
                <Button onClick={() => console.log('test')} size="medium" text="Default" variant="error" />
                <Button onClick={() => console.log('test')} size="medium" text="Default" isSquare />
                <Button onClick={() => console.log('test')} size="medium" text="Default" outline disabled />
                <Button onClick={() => console.log('test')} size="medium" text="Default" variant="primary" disabled />
                <Button
                    onClick={() => console.log('test')}
                    size="medium"
                    text="Default"
                    variant="primary"
                    startIcon={<TiAdjustBrightness />}
                />
                <Button
                    onClick={() => console.log('test')}
                    size="medium"
                    text="Default"
                    variant="success"
                    endIcon={<TiAdjustBrightness />}
                />
                <Button
                    onClick={() => console.log('test')}
                    size="medium"
                    text=""
                    variant="warning"
                    endIcon={<IoIosAirplane />}
                />
                <Button
                    onClick={() => console.log('test')}
                    size="large"
                    text=""
                    variant="error"
                    circle
                    endIcon={<TiAdjustBrightness />}
                />
                <Button
                    onClick={() => console.log('test')}
                    size="medium"
                    text="asdasdsad"
                    variant="success"
                    outline
                    circle
                    endIcon={<IoIosAirplane />}
                />
            </div>
        </div>
    );
};
