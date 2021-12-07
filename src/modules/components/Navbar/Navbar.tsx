import React, { useState } from 'react';
import classnames from 'classnames';
import { IoIosAirplane } from 'react-icons/io';
import { Button } from '../Button/Button';
import { INavbarMenuItem, IUser } from '../../core/types';
import { Input } from '../Input/Input';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';

interface INavbarProps {
    user?: IUser;
    square?: boolean;
    menuItems?: INavbarMenuItem[];
}

export const Navbar = ({ user, square, menuItems }: INavbarProps): JSX.Element => {
    const isAuthorized = !!user;

    const classes = classnames(
        { navbar: true },
        {
            square,
        },
    );

    const [inputValue, setInputValue] = useState('');

    return (
        <nav className={classes}>
            <p>Words project</p>
            <div className="items">
                {menuItems &&
                    menuItems.map((item, i) => (
                        <div role="button" tabIndex={i} key={item.id} onClick={item.action} onKeyDown={item.action}>
                            {item.title}
                        </div>
                    ))}
            </div>
            <div>
                {isAuthorized ? (
                    <Button text="Logout" onClick={() => console.log('logout')} />
                ) : (
                    <div className="authButtons">
                        <Input value={inputValue} placeholder="test" onChange={(value) => setInputValue(value)} />
                        <Button text="Login" outline onClick={() => console.log('login')} />
                        <Button text="Get started" onClick={() => console.log('get started')} />
                        <ThemeSwitch />
                    </div>
                )}
            </div>
        </nav>
    );
};
