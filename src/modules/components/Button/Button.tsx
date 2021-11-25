import React from 'react';
import classnames from 'classnames';
import { TComponentState, TElementSize } from '../../core/types';

interface IButtonProps {
    text: string;
    size?: TElementSize;
    variant?: TComponentState;
    isSquare?: boolean;
    disabled?: boolean;
    outline?: boolean;
    startIcon?: React.ReactElement;
    endIcon?: React.ReactElement;
    circle?: boolean;
    onClick: () => void;
}

export const Button = ({
    text,
    size = 'medium',
    variant = 'primary',
    isSquare,
    disabled,
    outline,
    startIcon,
    endIcon,
    circle,
    onClick,
}: IButtonProps): JSX.Element => {
    const classes = classnames(
        { button: true },
        { [`${size}`]: true },
        { square: isSquare },
        { [`${variant}`]: true },
        { outline },
        { defaultText: !outline },
        { circle },
    );

    return (
        <button className={classes} onClick={onClick} type="button" disabled={disabled}>
            {startIcon}
            {text}
            {endIcon}
        </button>
    );
};
