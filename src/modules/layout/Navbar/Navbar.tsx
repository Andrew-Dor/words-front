import React, { useEffect } from 'react';
import classnames from 'classnames';
import { useNavigate } from 'react-router';
import { gql, useMutation } from '@apollo/client';
import { Button } from '../../components/Button/Button';
import { INavbarMenuItem, IUser } from '../../core/types';
import { ThemeSwitch } from '../../components/ThemeSwitch/ThemeSwitch';
import { MenuButton } from '../../components/MenuButton/MenuButton';

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

    const TEST = gql`
        mutation test {
            createDictionary(params: { name: "test", description: "test" }) {
                _id
            }
        }
    `;

    const [mutate, { data, error }] = useMutation(TEST);

    const testMutate = async () => {
        try {
            mutate();
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <header className={classes}>
            <MenuButton />
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
                        <Button text="TEST REQ" onClick={testMutate} />
                        <ThemeSwitch />
                    </div>
                )}
            </div>
        </header>
    );
};
