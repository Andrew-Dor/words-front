import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { MdWbSunny, MdBedtime } from 'react-icons/md';
import { getTheme, setTheme } from '../../../utils/theme';

export const ThemeSwitch = (): JSX.Element => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const theme = getTheme();
        if (theme !== 'default') {
            document.body.setAttribute('data-theme', theme);
        }
        setIsDark(theme !== 'default');
    });

    const classes = classnames({ 'theme-switch': true }, { 'theme-switch-dark': isDark });

    const switchTheme = () => {
        document.body.setAttribute('data-theme', isDark ? 'default' : 'dark');
        setTheme(isDark ? 'default' : 'dark');
        setIsDark(!isDark);
    };

    return (
        <div className={classes} tabIndex={-1} role="button" onClick={switchTheme} onKeyDown={switchTheme}>
            <span className="theme-switch-button" />
            <MdWbSunny className="theme-switch-icon-light" />
            <MdBedtime className="theme-switch-icon-dark" />
        </div>
    );
};
