/* eslint-disable react/jsx-props-no-spreading */
import React, { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';
import { TComponentState, TElementSize } from '../../core/types';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    size?: TElementSize;
    color?: TComponentState;
    isSquare?: boolean;
    outline?: boolean;
    startIcon?: React.ReactElement;
    endIcon?: React.ReactElement;
    circle?: boolean;
    fullWidth?: boolean;
    className?: string;
    submit?: boolean;
    onClick?: () => void;
}

export const Button = ({
    text,
    size = 'medium',
    color = 'primary',
    isSquare,
    outline,
    startIcon,
    endIcon,
    circle,
    fullWidth,
    className,
    onClick,
    submit,
    ...props
}: IButtonProps): JSX.Element => {
    const classes = classnames(
        { button: true },
        { [`${size}`]: true },
        { square: isSquare },
        { [`${color}`]: true },
        { outline },
        { defaultText: !outline },
        { circle },
        { fullWidth },
        { [`${className}`]: className },
    );

    return (
        <button type={submit ? 'submit' : 'button'} className={classes} onClick={onClick} {...props}>
            {startIcon}
            {text}
            {endIcon}
        </button>
    );
};
