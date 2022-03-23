import React from 'react';
import classnames from 'classnames';

type TLoaderType = 'default' | 'moon' | 'dots';

interface ILoaderProps {
    type?: TLoaderType;
    size?: 'small' | 'medium' | 'large';
    centered?: boolean;
}

const SPINNER_CLASS: Record<TLoaderType, string> = {
    default: 'pulse-loader',
    moon: 'moon-loader',
    dots: 'dots-loader',
};

export const Loader = ({ type = 'default', size = 'medium', centered }: ILoaderProps) => {
    const classes = classnames({ [`${SPINNER_CLASS[type]}`]: true }, { [`${size}`]: true });

    return (
        <div className={centered ? 'loader-wrapper' : undefined}>
            <div className={classes}>Loading...</div>
        </div>
    );
};
