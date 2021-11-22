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
}

export const Button = ({
    text,
    size = 'medium',
    variant = 'primary',
    isSquare,
    disabled,
    outline,
}: IButtonProps): JSX.Element => {
    const classes = classnames(
        { button: true },
        { [`${size}`]: true },
        { square: isSquare },
        { [`${variant}`]: true },
        { outline },
        { defaultText: !outline },
    );

    return (
        <button className={classes} type="button" disabled={disabled}>
            {text}
        </button>
    );
};
