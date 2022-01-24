import React from 'react';
import classnames from 'classnames';
import { useNavigate } from 'react-router';
import { Button } from '../../components/Button/Button';
import { INavbarMenuItem, IUser } from '../../core/types';
import { ThemeSwitch } from '../../components/ThemeSwitch/ThemeSwitch';

interface INavbarProps {
    user?: IUser;
    square?: boolean;
    menuItems?: INavbarMenuItem[];
}

export const Navbar = ({ user, square, menuItems }: INavbarProps): JSX.Element => {
    const isAuthorized = !user;

    const classes = classnames(
        { navbar: true },
        {
            square,
        },
    );

    const navigate = useNavigate();

    return (
        <header className={classes}>
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
                    <Button text="Logout" onClick={() => navigate('/welcome')} />
                ) : (
                    <div className="authButtons">
                        <Button text="Sign in" outline onClick={() => navigate('/signIn')} />
                        <Button text="Sign up" onClick={() => navigate('../signUp')} />
                        <ThemeSwitch />
                    </div>
                )}
            </div>
        </header>
    );
};
