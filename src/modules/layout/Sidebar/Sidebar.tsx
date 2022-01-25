import classNames from 'classnames';
import React from 'react';
import { useAppState } from '../../core/stores/appStore';

export const Sidebar = (): JSX.Element => {
    const { isSidebarOpened } = useAppState();

    const classes = classNames({ sidebar: true }, { 'sidebar-opened': isSidebarOpened.get() });

    return (
        <div className={classes}>
            <div className="sidebar-content">
                <p>TEST</p>
            </div>
        </div>
    );
};
