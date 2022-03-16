import React, { useEffect } from 'react';
import classnames from 'classnames';
import { useNavigate } from 'react-router';
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { Button } from '../../components/Button/Button';
import { INavbarMenuItem, IUser } from '../../core/types';
import { ThemeSwitch } from '../../components/ThemeSwitch/ThemeSwitch';
import { MenuButton } from '../../components/MenuButton/MenuButton';
import { LOG_OUT } from '../../../queries/auth/logOut.gql';
import { useUserState } from '../../core/stores/userState';

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

    const userState = useUserState();
    const navigate = useNavigate();

    const TEST = gql`
        mutation test {
            createDictionary(params: { name: "test", description: "test" }) {
                _id
            }
        }
    `;

    const [mutate, { data, error }] = useMutation(TEST);
    const [logOut, { data: logOutData }] = useLazyQuery(LOG_OUT);

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

    useEffect(() => {
        if (logOutData) {
            userState.set(null);
            navigate('/welcome');
        }
    }, [logOutData]);

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
                <div className="authButtons">
                    {isAuthorized ? (
                        <>
                            <Button text="Log out" onClick={logOut} />
                            <Button text="TEST REQ" onClick={testMutate} />
                        </>
                    ) : (
                        <>
                            <Button text="Sign in" outline onClick={() => navigate('/signIn')} />
                            <Button text="Sign up" onClick={() => navigate('../signUp')} />
                        </>
                    )}
                    <ThemeSwitch />
                </div>
            </div>
        </header>
    );
};
